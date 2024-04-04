'use strict';

require('dotenv').config();

const { createTransport } = require('nodemailer');

module.exports = class BrevoSender {
    constructor() {
        this.transporter = createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_KEY,
            },
        });
    }

    async send({from, to, subject, text}) {
        const mailOptions = {from: from || process.env.SMTP_FROM, to, subject, text};

        return this.transporter.sendMail(mailOptions);
    }
}