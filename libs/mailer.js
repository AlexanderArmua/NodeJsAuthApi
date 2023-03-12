"use strict";
const nodemailer = require("nodemailer");
const { config } = require("../config/config");

async function sendMail({ from = "", to = "", subject = "", text = "", html = "" }) {
  let transporter = nodemailer.createTransport({
    host: config.emailSmptHost,
    port: Number(config.emailSmptPort),
    secure: true,
    auth: {
      user: config.emailUser,
      pass: config.emailPassword
    },
  });

  const mailSent =  await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });

  return mailSent;
}

module.exports = { sendMail };
