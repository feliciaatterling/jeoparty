const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


const app = express();

const gameRouter = require("./routes/game.js");
const homeRouter = require("./routes/home.js");

//const PORT = 8000;

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const uri = process.env.MONGODB_URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log(`Connected to database!`);
  } catch (error) {
    console.log(error);
  }
}

connect();

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());
app.use("/game", gameRouter);
app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
