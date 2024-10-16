const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const gameRouter = require("./routes/game.js");
const homeRouter = require("./routes/home.js");

//const PORT = 8000;

const PORT = process.env.PORT || 8000;

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

const corsOptions = {
  origin: "https://jeoparty-puce.vercel.app", // Allow your frontend's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow certain methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/game", gameRouter);
app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
