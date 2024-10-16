
<div align="center">
  <img src="./arc-mail-sender-logo.png" width="200" alt="Arc Mail Sender Logo"/>
  <h1>Arc Mail Sender</h1>
  <p>Simplify your email sending code with support for Brevo and SendGrid!</p>

[![npm version](https://badgen.net/npm/v/kevin-archie/arc-mail-sender)](https://www.npmjs.com/package/kevin-archie/arc-mail-sender)
[![npm downloads](https://badgen.net/npm/dm/kevin-archie/arc-mail-sender)](https://www.npmjs.com/package/kevin-archie/arc-mail-sender)
[![Continuous Integration](https://github.com/kevin-archie/arc-mail-sender/actions/workflows/ci.yml/badge.svg)](https://github.com/kevin-archie/arc-mail-sender/actions)
[![codecov](https://codecov.io/gh/arc-mail-sender/branch/main/graph/badge.svg?token=N61U168G08)](https://codecov.io/gh/arc-mail-sender)
[![Chat on Discord](https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord)](https://chat.arcmailsender.dev)
[![Open Collective](https://img.shields.io/opencollective/backers/arc-mail-sender)](https://opencollective.com/arc-mail-sender)
[![sponsor](https://img.shields.io/opencollective/all/arc-mail-sender?label=sponsors)](https://opencollective.com/arc-mail-sender)
</div>

## 🚀 Introduction

Arc Mail Sender is a lightweight library designed to minimize the amount of code needed to send emails. It provides a simple, configurable interface to integrate email services like Brevo (formerly Sendinblue) and SendGrid into your Node.js applications.

Currently, Arc Mail Sender supports:
- 💌 Brevo (via Nodemailer)
- 💌 SendGrid (via SendGrid Mail API)

## 🏍️ Available Clients

- [Brevo](https://app.brevo.com/)
- [SendGrid](https://sendgrid.com/)

> **Note**: This library is still in beta, and some features may not be fully stable. Feedback is welcome!

## 🚀 Features

- **Send Emails**: Send emails using customizable SMTP settings.
- **Minimal Setup**: Configure SMTP details via environment variables for easier integration.
- **Multi-provider Support**: Supports Brevo and SendGrid, with more providers coming soon.

## 📦 Installation

```bash
npm i github:codeArcadeID/arc-mail-sender
```

This command will always install the latest version from the main branch.

## 🪄 Usage

### Using Arc Mail Sender in **Next.js** API Routes

You can use Arc Mail Sender in your **Next.js** API routes to handle server-side email sending.

#### Example API Route (`pages/api/send-email.js`):

```javascript
import { brevoSender } from 'arc-mail-sender';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { from, to, subject, text } = req.body;

    const sendEmail = await brevoSender();
    await sendEmail.send({
      from: from || process.env.SMTP_FROM,
      to,
      subject,
      text,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
```

### Using Arc Mail Sender in **Express.js**

In **Express.js**, you can integrate Arc Mail Sender in your service layer to handle email sending logic, separating the concerns between your routes and business logic.

#### Description:
The recommended approach is to place the email-sending logic inside a **service file** to keep your route file clean and more maintainable. Here’s an example of how to set this up.

#### Example Service (`services/emailService.js`):

```javascript
const { brevoSender } = require('arc-mail-sender');

exports.sendEmail = async ({ from, to, subject, text }) => {
    const sendEmail = await brevoSender();

    await sendEmail.send({
        from: from || process.env.SMTP_FROM,
        to,
        subject,
        text,
    });
};
```

For **SendGrid**, replace `brevoSender` with `sendgridSender` in the service file and adjust the API key configuration accordingly.

## 📂 Project Structure

```
.
├── lib
│   ├── client
│   │   ├── brevo.ts
│   │   ├── sendgrid.ts
│   │   └── test
│   │       └── brevo.test.js
├── package.json
├── README.md
└── .env.example
```

## 🌱 Environment Variables

Create a `.env` file in the root directory of your project and configure the following environment variables:

```bash
SMTP_HOST=<your_smtp_host>
SMTP_PORT=<your_smtp_port>
SMTP_USER=<your_smtp_user>
SMTP_KEY=<your_smtp_key>
SMTP_FROM=<your_smtp_from_address>
```

Refer to `.env.example for more details.

## ✨ Contributing

We appreciate any contributions to improve Arc Mail Sender! Please read the [Contributing Guide](https://github.com/codeArcadeID/arc-mail-sender/blob/main/CONTRIBUTING.md) before making any pull requests.

## 📘 Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/codeArcadeID/arc-mail-sender/releases).

## 📦 License

This project is unlicensed.
