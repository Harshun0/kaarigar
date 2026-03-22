const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const getString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return json({ error: "Telegram is not configured on the server" }, 500);
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid JSON payload" }, 400);
  }

  const body = payload as Record<string, unknown>;
  const name = getString(body.name);
  const email = getString(body.email);
  const phone = getString(body.phone);
  const service = getString(body.service);
  const message = getString(body.message);

  if (!name || !email || !phone || !message) {
    return json({ error: "Name, email, phone, and message are required" }, 400);
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

    return json({ error: "Telegram request failed", details }, 502);
  }

  return json({ ok: true });
}
