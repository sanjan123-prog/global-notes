const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://chinthalasanjanreddy_db_user:o6HVrvXvGlQx5nZN@cluster0.nihtjlr.mongodb.net/?appName=Cluster0");

const noteschema = new mongoose.Schema({
    text:String
});

const note=new mongoose.model("Note",noteschema);

app.post("/add",async(req,res)=>{
    const Note = new note({text:req.body.text});
    await note.save();
    res.json(note);
});

app.get("/notes",async(req,res)=>{
    const notes= await note.find();
    res.json(notes);
});

app.listen(3000,()=>console.log("Server running"));