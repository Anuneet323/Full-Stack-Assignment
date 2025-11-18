require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// ⭐ FIXED CORS (Phone, Desktop, Vercel, Render)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://full-stack-assignment-gules.vercel.app"  // your frontend URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads folder
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/newsletter', require('./routes/newsletter'));

// ⭐ Database + Server Start
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`Server running successfully on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
