import { IncomingMessage, ServerResponse } from "node:http";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { defineConfig, loadEnv, Plugin } from "vite";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const getString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const sendJson = (response: ServerResponse, status: number, body: unknown) => {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
};

const readJsonBody = async (request: IncomingMessage) => {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8")) as Record<string, unknown>;
};

const telegramDevApiPlugin = (mode: string): Plugin => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    name: "telegram-dev-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response) => {
        if (request.method !== "POST") {
          sendJson(response, 405, { error: "Method not allowed" });
          return;
        }

        const botToken = env.TELEGRAM_BOT_TOKEN;
        const chatId = env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
          sendJson(response, 500, { error: "Telegram is not configured on the server" });
          return;
        }

        let body: Record<string, unknown>;

        try {
          body = await readJsonBody(request);
        } catch {
          sendJson(response, 400, { error: "Invalid JSON payload" });
          return;
        }

        const name = getString(body.name);
        const email = getString(body.email);
        const phone = getString(body.phone);
        const service = getString(body.service);
        const message = getString(body.message);

        if (!name || !email || !phone || !message) {
          sendJson(response, 400, { error: "Name, email, phone, and message are required" });
          return;
        }

        const telegramMessage = [
          "<b>New Contact Form Submission</b>",
          "",
          `<b>Name:</b> ${escapeHtml(name)}`,
          `<b>Email:</b> ${escapeHtml(email)}`,
          `<b>Phone:</b> ${escapeHtml(phone)}`,
          `<b>Service:</b> ${escapeHtml(service || "Not selected")}`,
          `<b>Message:</b> ${escapeHtml(message)}`,
        ].join("\n");

        try {
          const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: telegramMessage,
              parse_mode: "HTML",
            }),
          });

          if (!telegramResponse.ok) {
            const details = await telegramResponse.text();
            sendJson(response, 502, { error: "Telegram request failed", details });
            return;
          }

          sendJson(response, 200, { ok: true });
        } catch {
          sendJson(response, 502, { error: "Failed to reach Telegram" });
        }
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), telegramDevApiPlugin(mode), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
