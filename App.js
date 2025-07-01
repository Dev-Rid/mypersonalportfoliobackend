const express = require('express');
const app = express();



// | middleware |
app.use(express.json());





const port = 3000
const start = async () => {
    try {
        app.listen(port, "localhost", () => {
            console.log("server is running on port" + port);  
        })
     
    } catch (error) {
        console.log("error:", error);
    }    
   
}


start()