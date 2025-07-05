const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_API = https://api.telegram.org/bot${TOKEN};

app.post('/webhook', async (req, res) => {
  const message = req.body.message;

  if (message && message.text === '/start') {
    await axios.post(${TELEGRAM_API}/sendMessage, {
      chat_id: message.chat.id,
      text: '🤖 مرحبًا بك! تم تفعيل بوت Elon بنجاح ✅',
    });
  }

  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Bot is live ✅');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(Bot running on port ${PORT});
});
