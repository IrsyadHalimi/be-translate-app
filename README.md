<p align="center" bgcolor="white">
  <a href="https://nodejs.org/en" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/330px-Node.js_logo.svg.png" width="200" alt="Node.js Logo">
  </a>
  <a href="https://cloud.google.com" target="_blank"><img src="https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png" width="400" alt="GCP Logo">
  </a>
  <a target="_blank"><img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_2347acf6937fb08ac7c3a041e68b8f5a/google-cloud-translation-api.png" width="200" alt="Cloud API Logo">
  </a>
</p>

# **Translation APP**

A simple backend application built with **Node.js** and **Express.js** to translate text and provide a list of supported languages using Google Cloud Translation API.

---

## **Features**

- Translate text from one language to another using Google Cloud Translation.
- Retrieve a list of supported languages.

---

## **Requirements**

- [Node.js](https://nodejs.org) (v14 or higher)
- [Google Cloud Translation API Key](https://cloud.google.com/translate/docs/quickstart)
- `.env` file with your API key:

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/IrsyadHalimi/be-translate-app.git
cd be-translate-app
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the project root, and place your Google Translate API KEY:

```bash
TRANSLATE_API_KEY=your-google-cloud-api-key
```

## **Usage**

Start the server, Run the following command to start the application:

```bash
node server.js
```

The server will be accessible at http://localhost:3000

## **Endpoints**

```bash
POST /translate
```

Translate text into a target language
Request Body (JSON):

```bash
{
    "text": "Hello, world!",
    "target_language": "ja"
}
```

Response (JSON):

```bash
{
    "translated_text": "こんにちは、世界!"
}
```

```bash
    GET /languages
```

Retrieve a list of supported languages.
Response (JSON):

```bash
{
    "languages": [
        { "code": "id", "name": "Indonesian" },
        { "code": "ja", "name": "Japanese" },
    ]
}
```

## **Example Usage**

Using CURL

Translate Text

```bash
curl -X POST http://localhost:3000/translate \
-H "Content-Type: application/json" \
-d '{"text":"Good morning", "target_language":"ja"}'
```
