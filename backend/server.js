const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => res.json({ message: 'Get Hyped API running 🔥' }));

// MongoDB connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/gethyped';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    // Start server anyway (without DB for dev purposes)
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT} (no DB)`));
  });
