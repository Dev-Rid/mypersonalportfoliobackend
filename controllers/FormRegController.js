const Message = require("../model/message")


const Form = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try{
       const newMessage =  new Message({ name, email, subject, message}) 
       await newMessage.save();
       
       res.status(200).json({ message: "Message received!", newMessage })
       
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).json({ error: "Failed to save message. Please try again later." });
    }

}




module.exports = {
    Form
}