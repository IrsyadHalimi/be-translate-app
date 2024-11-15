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
