const Message = require("../model/message");
const nodemailer = require("nodemailer");

// 📬 Configure the transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS
    }
});

// Contact form handler
const Form = async (req, res) => {

    const { name, email, subject, message } = req.body;

    console.log(name, email, subject, message)

    // Validate inputs before proceeding
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    //  Email configuration
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `New Contact Message: ${subject}`,
        text: `
            You received a new message from your portfolio:

            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `
    };

    try {
        // Save to MongoDB
        const newMessage = new Message({ name, email, subject, message });
        await newMessage.save();

        //  Send email
        await transporter.sendMail(mailOptions)
            .then(info => {
                console.log("Email sent:", info.response)
            })
            .catch(error => {
                console.log("Emil sending error:", error)
            })

        console.log("message saved and email sent:", newMessage);
        res.status(200).json({ message: "Message received!", newMessage });

    } catch (error) {
        console.error("Error handling contact form:", error);
        res.status(500).json({ error: "Something went wrong. Please try again later." });
    }
};

module.exports = {
    Form
};
