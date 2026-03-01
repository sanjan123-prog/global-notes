require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Server running on port " + PORT));
})
.catch(err => console.log(err));