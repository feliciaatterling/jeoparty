const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const PORT = 8000;

const uri =
  "mongodb+srv://admin:jeoparty-admin@jeopartydb.ankyf.mongodb.net/jeopartyDB?retryWrites=true&w=majority&appName=jeopartyDB";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log(`Connected to database!`);
  } catch (error) {
    console.log(error);
  }
}

connect();
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a simple schema for an object (e.g., "Item")
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

// Create a model for the "Item" based on the schema
const Item = mongoose.model("Item", itemSchema);

// POST route to add a new item to the database
app.post("/items", async (req, res) => {
  const name = "Fladdan";
  const description = "Vi testar galet";
  const price = 200;

  // Create a new item based on the incoming data
  const newItem = new Item({
    name,
    description,
    price,
  });

  try {
    // Save the new item to MongoDB
    const savedItem = await newItem.save();
    res.status(201).json(savedItem); // Respond with the saved item
  } catch (error) {
    res.status(500).json({ error: "Failed to save the item" });
  }
});
