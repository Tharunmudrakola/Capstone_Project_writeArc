# BlogApp WriteArc — Frontend

This is the **frontend** of the *BlogApp WriteArc* blogging platform built with **React + Vite**.  
It connects to the backend APIs to allow **Users** and **Authors** to interact with articles and comments.

---

## 📌 Table of Contents

1. About  
2. Tech Stack  
3. Folder Structure  
4. Installation  
5. Available Scripts  
6. Environment Variables  
7. Features  
8. Component Overview  
9. API Interaction  
10. Toast Notifications  
11. Contributing  
12. License  

---

## 🧠 About

This React app serves as the **user interface** for the blogging platform.

- Users can register, login, read articles, and comment.
- Authors can create, edit, and manage their own articles.

---

## 🛠️ Tech Stack

- React (Vite)
- React Router
- Zustand (state management)
- Tailwind CSS (styling)
- Axios (API calls)

---

## 📁 Folder Structure

```

frontend
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── store/
│   ├── styles/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── vercel.json

````

---

## 🚀 Installation

```bash
cd blogapp-WriteArc/frontend
npm install
````

---

## ▶️ Available Scripts

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🔐 Environment Variables

Create a `.env` file in `frontend/`:

```
VITE_API_BASE_URL=http://localhost:5000
```

---

## ✨ Features

* Responsive UI using Tailwind CSS
* Role-based pages for User and Author
* Authentication using httpOnly cookies
* Dynamic article grid layout
* Comment system
* Toast notifications for actions

---

## 🧩 Component Overview

```
src/
├── assets/          → Images and icons
├── components/      → Reusable UI components
├── store/           → Zustand store
├── styles/          → Styling files
├── App.jsx          → Routing and layout
├── main.jsx         → React DOM render
└── index.css        → Global styles
```

Important components:

* Navbar
* Footer
* ArticleCard
* CommentCard
* Login
* Register
* UserProfile
* AuthorProfile
* ArticleByID

---

## 🔗 API Interaction

All API calls are made using **Axios** with credentials:

```js
axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/articles`, {
  withCredentials: true,
});
```

Endpoints used:

* `/common/login`
* `/common/logout`
* `/user/users`
* `/author/users`
* `/user/articles`
* `/author/articles/:id`

---

## 🔔 Toast Notifications

Using `react-hot-toast`:

Install:

```bash
npm install react-hot-toast
```

Add in `App.jsx`:

```jsx
<Toaster position="top-center" reverseOrder={false} />
```

Use:

```js
toast.success("Account created successfully");
```

---

## 🖼️ UI Behavior

### UserProfile

* Displays all active articles in grid

  * 1 card: extra small
  * 2 cards: small
  * 3 cards: medium
  * 4 cards: large+

### AuthorProfile

* Displays only author's articles in same grid layout

### ArticleByID

* Displays article title, category, content
* Shows author info and timestamps in IST format

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch
3. Commit changes
4. Push and create PR

---

## 📄 License

MIT






