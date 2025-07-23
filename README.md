
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
- React Toastify  

**Backend:**
- Node.js  
- Express.js  
- MongoDB with Mongoose  
- CORS & dotenv  

---

## 🖼️ UI Preview

**Home Page**  
![Home Page](screenshots/Screenshot%202025-07-23%20173754.png)

---

## ⚙️ Setup Instructions

### 📦 Prerequisites

- Node.js and npm installed  
- MongoDB (either locally or via MongoDB Atlas)

---

### 🔧 Step-by-Step Setup

---

### 🔹 1. Clone the Repositories

```bash
git clone https://github.com/skjawadahmed/online-diary-backend.git
git clone https://github.com/skjawadahmed/online-diary-frontend.git
````

---

### 🔹 2. Setup the Backend

```bash
cd online-diary-backend
npm install
```

Create a `.env` file in the root of the backend directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/online-diary
```

> 💡 Replace `MONGO_URI` with your MongoDB Atlas URI if you're using the cloud.

Start the backend server:

```bash
npm run dev
```

Backend will be running at: [http://localhost:5000](http://localhost:5000)

---

### 🔹 3. Setup the Frontend

```bash
cd ../online-diary-frontend
npm install
```

Start the frontend app:

```bash
npm run dev
```

Frontend will be running at: [http://localhost:5173](http://localhost:5173)

---

## ✅ Usage

Open your browser and go to [http://localhost:5173](http://localhost:5173).
You can now add, edit, and delete your notes.
All notes are saved in MongoDB and sorted with the most recent on top.

---

## 🔄 REST API Endpoints

* `GET /api/notes` – Fetch all notes
* `POST /api/notes` – Add a new note
* `PUT /api/notes/:id` – Update an existing note
* `DELETE /api/notes/:id` – Delete a note

---

## 🧑‍💻 Author

**Name:** Sk Jawad Ahmed
**GitHub:** [@skjawadahmed](https://github.com/skjawadahmed)

```

---

Let me know if you'd like to add deployment steps (e.g., for Render/Netlify/Vercel) or contribution guidelines.
```
