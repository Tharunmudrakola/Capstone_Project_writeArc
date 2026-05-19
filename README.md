# ✍️ BlogApp — WriteArc (MERN Blogging Platform)

WriteArc is a full-stack blogging platform built using the **MERN stack** where **Authors** can create and manage articles and **Users** can read and comment on them.

This project demonstrates **authentication, role-based access, CRUD operations, image uploads, protected routes, and production deployment**.

---

## 🚀 Live Demo

* 🌐 Frontend (Deployed): **https://blogapp-write-arc.vercel.app/**
* 🔗 Backend API (Deployed): **https://blogapp-writearc.onrender.com**

---

## 🧠 Features

### 👤 User

* Register & Login
* View all active articles
* Comment on articles

### ✍️ Author

* Register & Login
* Create new articles
* Edit own articles
* Soft delete / restore articles

### 🔐 Authentication

* JWT stored in httpOnly cookies
* Role-based authorization (USER / AUTHOR / ADMIN)
* Persistent login on refresh

### 🖼️ Image Uploads

* Profile images uploaded via Multer and stored on **Cloudinary**

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM
* Context API (Auth Store)

### Backend

* Node.js
* Express.js
* MongoDB with Mongoose
* JWT Authentication
* Multer (memory storage)

### Deployment & Services

* Frontend hosted on **Vercel**
* Backend hosted on **Render**
* Database on **MongoDB Atlas**

---

## 📁 Project Structure

```
blogapp-WriteArc
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── store
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend
    ├── APIs
    ├── models
    ├── services
    ├── middlewares
    ├── config
    ├── server.js
    └── package.json
```

---

## ⚙️ Installation (Run Locally)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ritesh-mogilamoni/blogapp-WriteArc.git
cd blogapp-WriteArc
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Routes Overview

### `/author`

| Method | Route                       | Description           |
| ------ | --------------------------- | --------------------- |
| POST   | /author/users               | Register author       |
| POST   | /author/articles            | Create article        |
| GET    | /author/articles/:authorId  | Author’s articles     |
| PUT    | /author/articles            | Edit article          |
| PATCH  | /author/articles/:id/status | Soft delete / restore |

### `/user`

| Method | Route          | Description          |
| ------ | -------------- | -------------------- |
| POST   | /user/users    | Register user        |
| GET    | /user/articles | View active articles |
| PUT    | /user/articles | Add comment          |

### `/common`

| Method | Route                   | Description          |
| ------ | ----------------------- | -------------------- |
| POST   | /common/login           | Login                |
| GET    | /common/logout          | Logout               |
| PUT    | /common/change-password | Change password      |
| GET    | /common/check-auth      | Check authentication |

---

## 🔐 Role-Based Permissions

| Role   | Permissions                        |
| ------ | ---------------------------------- |
| USER   | Read, Comment                      |
| AUTHOR | Create, Edit, Soft delete articles |
| ADMIN  | Extendable                         |

---

## 🧪 Test Credentials

```
USER

Email: user@mail.com
Password: user

AUTHOR

Email: author@mail.com
Password: author
```

---

## 🧩 Important Concepts Implemented

* JWT Authentication with cookies
* Protected routes in React
* Role-based Express middleware
* Image upload with Multer + Cloudinary
* Soft delete using `isArticleActive`
* Modular folder structure
* Axios service layer
* Tailwind responsive UI

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Author

**Ritesh Mogilamoni**

If you like this project, give it a ⭐ on GitHub!
