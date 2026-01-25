# 📝 Next.js Notes Manager (Full Stack)

A modern full-stack **Notes Manager** application built using **Next.js (App Router)**, **MongoDB (Mongoose)**, and **Tailwind CSS**.

This project is perfect for beginners who want to learn how to build a **real-world full-stack application** using Next.js with backend APIs and a database.

---

## 🚀 Features

- ✅ Add new notes (Title + Content)
- ✅ View all notes
- ✅ Delete notes
- ✅ Data stored in MongoDB (Cloud / Atlas)
- ✅ Clean modern UI with Tailwind CSS
- ✅ Full stack using Next.js (Frontend + Backend)
- ✅ API Routes using App Router
- ✅ Production-style project structure

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16 (App Router), React, Tailwind CSS  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB Atlas + Mongoose  
- **Language:** TypeScript  

---

## 📁 Project Structure

```
notes-app/
 ├── app/
 │   ├── api/
 │   │   └── notes/
 │   │       └── route.ts
 │   ├── page.tsx
 │   └── layout.tsx
 ├── lib/
 │   └── db.ts
 ├── models/
 │   └── Note.ts
 ├── public/
 ├── .env.local
 ├── package.json
 └── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/nextjs-notes-app.git
cd nextjs-notes-app
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a file:

```
.env.local
```

Add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/notesapp
```

⚠️ Never commit `.env.local` to GitHub.

---

### 4️⃣ Run the development server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint      | Description       |
|--------|---------------|------------------|
| GET    | /api/notes    | Get all notes    |
| POST   | /api/notes    | Create a note    |
| DELETE | /api/notes    | Delete a note    |

---

## 🧠 What I Learn From This Project

- ✅ Next.js App Router
- ✅ API Routes in Next.js
- ✅ MongoDB + Mongoose integration
- ✅ Full-stack architecture
- ✅ React state management
- ✅ Tailwind UI design
- ✅ Environment variables & security
- ✅ Project structuring like real-world apps


---

## 👨‍💻 Author

**Abhishek Jha**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and use it as your portfolio project!

---

## 📜 License

This project is open-source and free to use for learning and educational purposes.
