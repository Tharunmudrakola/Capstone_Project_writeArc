
# BlogApp WriteArc — Backend

This is the **backend server** for the BlogApp *WriteArc* project.  
It provides RESTful APIs for user authentication, blog posts, and related features built with **Node.js**, **Express.js**, and **MongoDB**.

---

## 📌 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Directory Structure](#directory-structure)  
5. [Installation](#installation)  
6. [Usage](#usage)  
7. [Live Backend API](#live-backend-api)  
8. [API Endpoints](#api-endpoints)  
9. [Environment Variables](#environment-variables)  
10. [Role-Based Permissions](#role-based-permissions)  
11. [Notes](#notes)  
12. [Contributing](#contributing)  
13. [License](#license)

---

## 🧠 About

The backend handles all server-side logic and database interactions for the WriteArc blogging platform.

---

## ✨ Features

- JWT-based user authentication  
- CRUD operations for blogs  
- Clean Express routing  
- Middleware for validation and security  
- Modular folder structure  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer + Cloudinary (image upload)  
- dotenv  

---

## 📁 Directory Structure

```

backend
├── APIs/
├── config/
├── middlewares/
├── models/
├── services/
├── server.js
├── package.json
└── nodemon.json

````

---

## 🚀 Installation

```bash
git clone https://github.com/ritesh-mogilamoni/blogapp-WriteArc.git
cd blogapp-WriteArc/backend
npm install
````

Create a `.env` file (see below).

---

## ▶️ Usage

Development mode (recommended):

```bash
nodemon server.js
```

Normal start:

```bash
node server.js
```

---

## 🌐 Live Backend API

**Base URL (Deployed):**

```
https://blogapp-writearc.onrender.com
```

---

## 🔗 API Endpoints

### 👤 Author APIs (`/author`)

* **POST** `/author/users` — Register author with profile image
* **POST** `/author/articles` — Create article (AUTHOR)
* **GET** `/author/articles/:authorId` — Get author's articles (AUTHOR)
* **PUT** `/author/articles` — Edit article (AUTHOR)
* **PATCH** `/author/articles/:id/status` — Soft delete / restore (AUTHOR)

### 🙋 User APIs (`/user`)

* **POST** `/user/users` — Register user with profile image
* **GET** `/user/articles` — Read all active articles (USER)
* **PUT** `/user/articles` — Add comment to article (USER)

### 🔐 Common APIs (`/common`)

* **POST** `/common/login` — Login USER / AUTHOR / ADMIN
* **GET** `/common/logout` — Logout
* **PUT** `/common/change-password` — Change password
* **GET** `/common/check-auth` — Page refresh authentication

---

## 🔐 Environment Variables

Create `.env` inside `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

## 🧩 Role-Based Permissions

**USER**

* Read articles
* Comment on articles

**AUTHOR**

* Create articles
* Edit own articles
* Soft delete / restore own articles

**ADMIN**

* Supported by same authentication system (extendable)

---

## 📝 Notes

* Images uploaded using Multer memory storage → Cloudinary
* JWT stored in httpOnly cookies
* Articles use soft delete with `isArticleActive`
* Comments embedded inside articles and populated with user info

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch
3. Commit changes
4. Open Pull Request

---

## 📄 License

MIT License

```
