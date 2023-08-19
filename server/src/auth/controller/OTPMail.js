import User from "../models/index.js";
import { sendOTPMail } from "../../../services/mail/Mail.js";

function sendOTP(req, res) {
  const user = req.body;
  const dbUser = User.findOne({ email: user.email });
  if (!dbUser) {
    return res.send({
      success: false,
      message: "No Account Found with this Email",
    });
  } else {
    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp).toString();
    console.log(otp);
    sendOTPMail(
      user.email,
      otp
    );
    return res.send({
      success: true,
      message: "OTP Sent Successfully",
      otp: otp,
    });
  }
}


export { sendOTP};
