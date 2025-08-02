# LLMQ-App 

A full-stack web app that lets users ask questions and get responses using a public LLM (Large Language Model) API. Built with **React** (frontend) and **Node.js/Express** (backend), the app uses **Groq's LLaMA3-8B** model to provide simple, AI-generated answers.

## Features

- Ask any question via a user-friendly text input
- Get answers in real-time from an open-source LLM API (Groq)
- Fully functional frontend and backend
- Responsive design with clear feedback

---

## Tech Stack

### Frontend:
- React.js
- Axios
- CSS (or any framework you used)

### Backend:
- Node.js
- Express.js
- Axios
- Groq LLM API (LLaMA3-8B-8192)

---

## Project Structure

llmq-app/
│
├── frontend/       
│   └── src/
│       ├── App.js
│       └── ...
│
├── backend/       
│   └── index.js
│
└── README.md


---

## Setup Instructions

### Prerequisites:
- Node.js installed
- Internet connection

---

### Backend Setup


cd backend
npm install


#### Create a .env file inside the backend/ folder:


GROQ_API_KEY=your_groq_api_key_here


> Get a free API key from https://console.groq.com/

#### Start the backend server:


node index.js


The backend runs on: http://localhost:5000

---

### Frontend Setup


cd frontend
npm install
npm start


The frontend runs on: http://localhost:3000

---

## How It Works

1. User types a question in the input box.
2. Frontend sends the question to the backend via an API call.
3. Backend sends the question to the Groq LLaMA3 API.
4. Response is returned and displayed to the user.

---

## 📸 Demo Screenshot


https://drive.google.com/file/d/1TJS1ut2GOMNTAQfAnEsM7hfsl1xGMc7A/view?usp=sharing
