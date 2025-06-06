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
    from: process.env.SMTP_EMAIL,
    to ,
    subject: `${productName} Price Dropped!`,
    html: `<p>The price is now ₹${price} for <b>${productName}</b>.</p><a href="${url}">Buy Now</a>`,
  };

  await transporter.sendMail(mailOptions);
};
