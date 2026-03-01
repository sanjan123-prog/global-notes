const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
mongoose.connect(process.env.MONGO_URI);