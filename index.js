const express = require("express");
const cors = require("cors");
require("dotenv/config");

const heroRoute = require("./routes/hero.js");

// Initialize server
const app = express();
const PORT = process.env.PORT;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes to handle
app.use("/heroes", heroRoute);

app.listen(PORT, (error) => {
  if (!error) console.log(`Server up and listening on port: ${PORT}`);
  else console.log("Cannot start server...", error);
});
