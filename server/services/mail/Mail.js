import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import config from "../../config.js";

let transporter = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./services/mail/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./services/mail/templates/"),
};

transporter.use("compile", hbs(handlebarOptions));

function sendOTPMail(email, otp) {
  var mailOptions = {
    from: "Rohit Kumar <noreply@aboutrohit.in>",
    to: email,
    subject: "OTP to Reset Password on Admin Dashboard",
    template: "otp",
    context: {
      otp: otp,
      email: email,
    },
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

function sendSubscription(email) {
  var mailOptions = {
    from: "Rohit Kumar <noreply@aboutrohit.in>",
    to: email,
    subject: "Thanks for Subscribing Me.!",
    template: "subscribe",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export { sendOTPMail, sendSubscription };

// sendOTPMail("r.k2962002@gmail.com", "123456", "Login", "Login OTP");
// sendWelcomeMail("r.k2962002@gmail.com")
