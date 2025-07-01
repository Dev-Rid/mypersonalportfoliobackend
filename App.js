require("dotenv").config() // Load environment variables
const express = require('express');
const app = express();
const cors = require('cors');
const FormRouter = require("./routes/FormRegRouter")


// | middleware |
app.use(express.json());
app.use(cors())


// | register router|
app.use("/api", FormRouter)


const PORT = process.env.PORT

const start = async () => {
    try {
        app.listen(PORT, "localhost", () => {
            console.log("server is running on port " + PORT);  
        })
     
    } catch (error) {
        console.log("error:", error);
    }    
   
}


start()