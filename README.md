# Backend Mission 2 - Database & Data Modeling

## 📌 Project Overview

This project was developed as part of the **VertexMind Backend Development Internship - Mission 2**.

The application is built using **Node.js**, **Express.js**, and **MongoDB Atlas**. It demonstrates database integration, data modeling using Mongoose, and complete CRUD (Create, Read, Update, Delete) operations with proper validation.

---

## 🚀 Features

- MongoDB Atlas Integration
- Mongoose Data Modeling
- Create User API
- Get All Users API
- Get User by ID API
- Update User API
- Delete User API
- Input Validation
- JSON Responses
- Proper HTTP Status Codes
- Environment Variable Support using dotenv

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Nodemon

---

## 📁 Project Structure

```
Backend-Mission2/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project folder

```bash
cd Backend-Mission2
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
```

Run the server

```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Check Server |
| POST | /api/users | Create User |
| GET | /api/users | Get All Users |
| GET | /api/users/:id | Get User By ID |
| PUT | /api/users/:id | Update User |
| DELETE | /api/users/:id | Delete User |

---

## 🧪 API Testing

The APIs were tested using **Thunder Client**.

---

## 👨‍💻 Author

**Prathamesh Bidkar**

Backend Development Intern

VertexMind
