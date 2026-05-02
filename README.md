# 🚀 Team Task Manager (Full-Stack Application)

## 📌 Overview

This is a **full-stack web application** designed to help users efficiently manage tasks with **secure authentication** and **role-based access control**. Users can seamlessly **create, update, view, and delete tasks**. The application is fully functional and deployed for real-world usage.

---

## 🔗 GitHub Repository

👉 https://github.com/purshottampandey0410/team-task-manager

---

## ✨ Features

✅ User Authentication (Signup & Login using JWT)
✅ Role-Based Access Control (Admin / Member)
✅ Create Tasks 📝
✅ View All Tasks 📋
✅ Update Task Status (Pending → ✅ Done)
✅ Delete Tasks ❌
✅ Secure API using Middleware 🔐
✅ Backend deployed on Railway 🚄

---

## 🛠️ Tech Stack

### 🎨 Frontend

* ⚛️ React.js
* 🔗 Axios
* 🌐 React Router

### ⚙️ Backend

* 🟢 Node.js
* 🚀 Express.js
* 🍃 MongoDB (Mongoose)

---

## 📁 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── TaskList.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## 🌍 Deployment

* 🚄 Backend deployed on Railway
* 💻 Frontend runs locally using Vite

---

## 🔗 API Endpoints

### 🔐 Authentication

* `POST /api/auth/signup` → Register new user
* `POST /api/auth/login` → Login user

### 📋 Tasks

* `GET /api/tasks` → Fetch all tasks
* `POST /api/tasks` → Create a new task
* `PUT /api/tasks/:id` → Update task status
* `DELETE /api/tasks/:id` → Delete a task

---

## ⚡ How to Run Locally

### 1️⃣ Clone the repository

```
git clone https://github.com/purshottampandey0410/team-task-manager.git
```

### 2️⃣ Backend Setup

```
cd backend
npm install
npm start
```

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:5173
```

---

## 🎯 Usage

* 🔑 Login using registered credentials
* ➕ Add new tasks
* ✅ Mark tasks as completed
* ❌ Delete tasks
* 🔐 All operations are secured using JWT authentication

---

## 🌐 Live Application

👉 https://team-task-manager-production-3327.up.railway.app

---

## 🎬 Demo Summary

* 👤 User logs in using credentials
* 🔐 JWT token is generated and stored
* 📝 User can create, update, and delete tasks
* 🔄 Task status updates dynamically

---

## 👨‍💻 Author

**Purushottam Pandey**
🎓 B.Tech CSE
