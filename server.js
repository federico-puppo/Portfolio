require('dotenv').config()
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
// console.log("APP MAIL USER: "+process.env.REACT_APP_MAIL_USER);
//console.log("APP MAIL PASS: "+process.env.REACT_APP_MAIL_PASS);

// const contactEmail = nodemailer.createTransport({
//   host: 'smtp.live.com',
//   port: 465,
//   secure: true,
//   auth: {
//       user: 'fedex-92@live.com.ar',
//       pass: 'Hotmail123'
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });
const contactEmail = nodemailer.createTransport({
  service: process.env.REACT_APP_MAIL_SERVICE,
  port: 587,
  auth: {
      user: process.env.REACT_APP_MAIL_USER,
      pass: process.env.REACT_APP_MAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});


contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = (req.body.firstName+" "+req.body.lastName);
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.REACT_APP_MAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
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
