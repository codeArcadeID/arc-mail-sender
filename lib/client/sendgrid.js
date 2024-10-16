'use strict';

require('dotenv').config();

const sgMail = require('@sendgrid/mail');

module.exports = class SendgridSender {
    constructor() {
        this.transporter = sgMail.setApiKey(process.env.SMTP_KEY);
    }

    async send({from, to, subject, text}) {
        const mailOptions = {from: from || process.env.SMTP_FROM, to, subject, text};

        return this.transporter.send(mailOptions);
    }
}