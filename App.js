require("dotenv").config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const FormRouter = require("./routes/FormRegRouter");

const app = express();

// | middleware |
app.use(express.json());
app.use(cors());

// | register router |
app.use("/api", FormRouter);

const PORT = process.env.PORT || 3000;

// Optional: Log to debug
// console.log("PORT:", PORT);
// console.log("MONGO_URL:", process.env.MONGO_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(PORT, "localhost", () => {
        console.log("Server is running on port " + PORT);  
    });
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});
