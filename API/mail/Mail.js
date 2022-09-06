import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

let transporter = nodemailer.createTransport({
  host: "smtp.elasticemail.com",
  port: 2525,
  auth: {
    user: "no-reply@aboutrohit.in",
    pass: "53FCED22F266F483330AFF10827E3D6E91B4",
  },
});

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./API/mail/templates/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./API/mail/templates/"),
};

transporter.use("compile", hbs(handlebarOptions));

function sendOTPMail(email, otp, reason, sub) {
  var mailOptions = {
    from: "Rohit Kumar <no-reply@aboutrohit.in>",
    to: email,
    subject: sub,
    template: "otp",
    context: {
      otp: otp,
      title: reason,
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

// sendOTPMail("r.k2962002@gmail.com", "123456", "Login", "Login OTP");
// sendWelcomeMail("r.k2962002@gmail.com")

function sendWelcomeMail(email) {
  var mailOptions = {
    from: "Rohit Kumar <no-reply@aboutrohit.in>",
    to: email,
    subject: "Welcome to Rohit Kumar!",
    template: "welcome",
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
    from: "Rohit Kumar <no-reply@aboutrohit.in>",
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


export { sendOTPMail, sendWelcomeMail,sendSubscription };
