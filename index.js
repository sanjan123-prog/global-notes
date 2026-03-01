require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ----------------- MONGOOSE MODEL -----------------
const NoteSchema = new mongoose.Schema({
  text: String
});

const Note = mongoose.model("Note", NoteSchema);

// ----------------- ROUTES -----------------

// Test
app.get("/", (req, res) => {
  res.send("Global Notes API Running");
});

// Add note
app.post("/add", async (req, res) => {
  const { text } = req.body;

  const newNote = new Note({ text });
  await newNote.save();

  res.json({ message: "Note saved" });
});

// Get notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// ----------------- CONNECT DB -----------------
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => console.log(err));