const nodeMailer = require("nodemailer");
const { EMAIL_PASSWORD } = require("./config");

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "pink.c.booking@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

const sendEmails = {
  sendEmail: function (req, res) {
    const { name, email, phone, info, file } = req;
    let mailOptions = {
      from: '"pinc-c booking" pink.c.booking@gmail.com',
      to: "pasha.tay@bk.ru",
      subject: "Session booking",
      text: `name: ${name}, email: ${email}, phone:${phone}, info:${info}, files: ${file}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(400).send({ success: false });
      } else {
        res.status(200).send({ success: true });
      }
    });
  },
};

module.exports = sendEmails;
