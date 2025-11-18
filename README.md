✅ FLIPR Full-Stack Web Application

A fully responsive, cloud-deployed full-stack application built for the Flipr Assignment, featuring a premium glassmorphism UI, secure admin panel, CRUD dashboards, and complete project/client/contact/newsletter management.

This project demonstrates real-world MERN development, API design, authentication, UI/UX design, and cloud deployment.

🚀 Tech Stack
Frontend

React.js (Vite)

TailwindCSS

Axios

React Router

Glassmorphism UI + Animations

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

Multer (file uploads)

Sharp (image cropping)

Cloudinary (image storage)

JWT Authentication

Deployment

Render (Backend)

Vercel (Frontend)

MongoDB Atlas (DB)

Cloudinary (Image storage)

🎯 Features
🌐 Landing Page

Dynamic Projects section

Dynamic Clients section

Fully working Contact Form

Newsletter subscription

Glassmorphism + animated UI

🔐 Admin Panel

Secure login (JWT)

Add / Edit / Delete Projects

Add / Edit / Delete Clients

View Contact Form Responses

View Newsletter Subscribers

Cloudinary image upload

Automatic image cropping (450×350)

🗂️ Folder Structure
flipr/
 ├── backend/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── uploads/
 │    ├── server.js
 │    └── package.json
 │
 └── frontend/
      ├── src/
      │    ├── pages/
      │    ├── admin/
      │    ├── api/
      │    └── App.jsx
      ├── index.html
      └── package.json

⚙️ Installation & Setup
1. Clone Repository
git clone https://github.com/your-username/flipr.git
cd flipr

2. Setup Backend
cd backend
npm install
npm run dev


Add a .env:

PORT=5000
MONGO_URI=your_mongo
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
ADMIN_PASSWORD=your_password
ADMIN_TOKEN_SECRET=your_secret

3. Setup Frontend
cd frontend
npm install
npm run dev

☁️ Deployment
Backend → Render

Create Web Service

Set root directory: /backend

Add .env variables

Deploy

Frontend → Vercel

Select root directory: /frontend

Build command: npm run build

Output: dist

Deploy

🔗 Live Links

Frontend: https://flipr-phi.vercel.app/

Backend: https://flipr-uzcs.onrender.com

API Base URL: /api/*

📸 Screenshots

(Add screenshots later)

![Landing Page](screenshot1.png)
![Admin Panel](screenshot2.png)

🙌 Author

Anuneet Singh Chauhan
Full-Stack Developer | React | Node.js | MERN | Cloud
