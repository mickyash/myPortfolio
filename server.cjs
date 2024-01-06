const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname,'./dist')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen( 5000, );
 


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS

   

  },
});



router.post("/contact", (req, res) => {
  const name = req.body.firstName;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "yashmicky2862@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});