// utils/mailer.js
import nodemailer from "nodemailer";

export const sendEmail = async (to, productName, price, url) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to ,
    subject: `${productName} Price Dropped!`,
    html: `<p>The price is now ₹${price} for <b>${productName}</b>.</p><a href="${url}">Buy Now</a>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to} for ${productName}`);
  } catch (err) {
    console.error("Email send error:", err);
    throw new ApiError(500, "Failed to send email");
  }
};
