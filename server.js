const express = require("express");
const bodyParser = require("body-parser");
const { Translate } = require("@google-cloud/translate").v2;
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.json());

const translate = new Translate({ key: process.env.TRANSLATE_API_KEY });

app.post("/translate", async (req, res) => {
  const { text, target_language } = req.body;
  if (!text || !target_language) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const [translatedText] = await translate.translate(text, target_language);
    res.json({ translated_text: translatedText });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/languages", (req, res) => {
  res.json({
    languages: [
      { code: "id", name: "Indonesian" },
      { code: "ja", name: "Japanese" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Translation app listening at http://localhost:${port}`);
});