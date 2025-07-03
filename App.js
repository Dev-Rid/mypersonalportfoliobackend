require("dotenv").config() // Load environment variables
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose")
const FormRouter = require("./routes/FormRegRouter")
const app = express();


// | middleware |
app.use(express.json());
app.use(cors())


// | register router|
app.use("/api", FormRouter)


const PORT = process.env.PORT 

mongoose.connect(process.env.MONGO_URL)
    .then(() =>{
        app.listen("localhost", PORT, () => {
            console.log("server is running on port " + PORT);  
        })
    })
    .catch((error) => {
        console.error("error", error)

})
