# Next.js Notes App

A notes app where the page and the API live in one Next.js project, with data in MongoDB.

## Why this exists
Practice building a full-stack app in Next.js alone, using App Router API routes instead of a separate backend.

## What it does
- Create, list and delete notes from a single page
- `app/api/notes/route.ts` handles the API requests
- Stores notes in MongoDB through a Mongoose model
- Styled with Tailwind CSS

## Project structure
```
Note-making-apps-using-nextjs/
├── app/
│   ├── api/notes/route.ts  Notes API route
│   ├── page.tsx            Notes page
│   └── layout.tsx          Root layout
├── lib/db.ts               MongoDB connection
├── models/Note.ts          Note schema
├── public/                 Static icons
└── package.json            Scripts and dependencies
```

## Getting started
Requirements: Node.js 18+, a MongoDB database (local or Atlas).
```bash
git clone https://github.com/abhijha8287/Note-making-apps-using-nextjs.git
cd Note-making-apps-using-nextjs
npm install
npm run dev           # http://localhost:3000
```
Before running, replace the connection string in `lib/db.ts` with your own MongoDB URL.

## Tech stack
Next.js (App Router), React, TypeScript, MongoDB, Mongoose, Tailwind CSS
