# Kaarigar Tech Canvas

This project now sends contact form submissions to Telegram through a server-side API route.

## Telegram setup

1. Create a local `.env` file from `.env.example`.
2. Set these values:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

## How to get the chat ID

1. Open Telegram and start a chat with your bot.
2. Send any message to the bot, for example `hi`.
3. Visit:

```text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

4. Find `message.chat.id` in the response and use that value as `TELEGRAM_CHAT_ID`.

## Running locally

The frontend runs on Vite. Local development now includes a Vite middleware for `POST /api/contact`, so form submissions work on `http://localhost:8080` as long as your `.env` file contains the Telegram values.

If you deploy on Vercel:

1. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` in the project environment settings.
2. Deploy the project.
3. The contact form will post to `/api/contact` and forward submissions to Telegram.

## Security note

Do not put the bot token in frontend code. It must stay in server-side environment variables only.
