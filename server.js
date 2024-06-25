const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const cors = require('cors'); 
const path = require("path"); 
require('dotenv').config();

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Use the cors middleware

// Routes
app.use('/api', movieRoutes);

app.get("/", (req, res) => { 
  app.use(express.static(path.resolve(__dirname, "frontend", "build"))); 
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")); 
}); 
// app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
// });
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
