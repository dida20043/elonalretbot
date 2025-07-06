const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_URL = https://api.telegram.org/bot${TOKEN};

app.get('/', (req, res) => {
  res.send('✅ البوت شغال!');
});

app.post('/webhook', async (req, res) => {
  const msg = req.body.message;

  if (msg && msg.text === '/start') {
    await axios.post(${TELEGRAM_URL}/sendMessage, {
      chat_id: msg.chat.id,
      text: '👋 أهلًا بك! البوت يعمل الآن بنجاح ✅',
    });
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(✅ Server is running on port ${PORT});
});
