# 📝 Online Diary App

An online personal diary application built using the **MERN stack (MongoDB, Express, React, Node.js)** with **TypeScript** and styled using **Tailwind CSS**. This app allows users to create, view, edit, and delete notes — all sorted by the most recent first.

---

## 🚀 Features

- 🆕 Add a new note with title and content
- 🕒 Automatically store **creation date and time**
- ✏️ Edit existing notes
- 🗑️ Delete notes with confirmation popup
- 🔔 Toast notifications for actions (add, edit, delete)
- ⬇️ Notes appear **newest first**
- 🎨 Clean and responsive UI with Tailwind CSS
- 🔒 RESTful API with Express and MongoDB

---

## 🧱 Tech Stack

**Frontend:**
- React + TypeScript
- Tailwind CSS
- Axios
- React Icons
- Toastify for notifications

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS & dotenv

---

## 📁 Project Structure


---

## ⚙️ Setup Instructions

### 📦 Prerequisites
- Node.js and npm
- MongoDB (local or cloud via MongoDB Atlas)

### 🧩 Backend Setup

```bash
cd backend
npm install
# Create a .env file with the following:
MONGO_URI=<your_mongo_connection_string>
PORT=5000

npm run dev

cd frontend
npm install
npm run dev
