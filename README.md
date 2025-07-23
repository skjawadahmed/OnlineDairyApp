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

Home Page ![Home Page](screenshots/Screenshot%202025-07-23%20173754.png)




---

## 🖼️ UI Preview

**Home Page:**  
![Home Page](screenshots/Screenshot%202025-07-23%20173754.png)

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- Node.js and npm installed
- MongoDB installed locally or create a MongoDB Atlas cloud account

---

### 🔧 Step-by-Step Setup

---

### 🔹 1. Clone the Repositories

```bash
git clone https://github.com/skjawadahmed/online-diary-frontend.git
git clone https://github.com/skjawadahmed/online-diary-backend.git

### 🔧 Step Backend
cd online-diary-backend
npm install

### create .env file inside the online-diary-backend directory
PORT=5000
MONGO_URI=mongodb://localhost:27017/online-diary
Replace the URI with your MongoDB Atlas connection string if you're using the cloud.

Start the backend server: npm run dev

