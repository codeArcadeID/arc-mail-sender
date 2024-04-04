<div align="center">
  <img src="./docs/public/logo.svg" width="200"/>
  <h1>Arc Mail Sender</h1>
  <p>Help you to minimize code for send emails</p>

[![npm version](https://badgen.net/npm/v/kevin-archie/arc-mail-sender)](https://www.npmjs.com/package/kevin-archie/arc-mail-sender)
[![npm downloads](https://badgen.net/npm/dm/kevin-archie/arc-mail-sender)](https://www.npmjs.com/package/kevin-archie/arc-mail-sender)
[![Continuous Integration](https://github.com/kevin-archie/arc-mail-sender/actions/workflows/ci.yml/badge.svg)](https://github.com/faker-js/faker/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/faker-js/faker/branch/next/graph/badge.svg?token=N61U168G08)](https://codecov.io/gh/arc-mail-sender)
[![Chat on Discord](https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord)](https://chat.arcmailsender.dev)
[![Open Collective](https://img.shields.io/opencollective/backers/fakerjs)](https://opencollective.com/fakerjs#section-contributors)
[![sponsor](https://img.shields.io/opencollective/all/arc-mail-sender?label=sponsors)](https://opencollective.com/fakerjs)
</div>

## 🏍️ Available Clients

- 💌 [Brevo](https://app.brevo.com/)

> **Note**: This is still on beta version please don't expect to much!

## 🚀 Features

- 💌 Send - Send email with Customize SMTP!

> **Note**: This is still on beta version please don't expect to much!


## 📦 Install

```bash
npm install --save arc-mail-sender
```

## 🪄 Usage

```ts
// ESM
// Not Available Yet

// CJS
const { brevoSender } = require("arc-mail-sender");
const sendEmail = new brevoSender();

sendEmailRegistration: async () => {
    //any logic ...
    
    await sendEmail.send({
        from: 'noreply@sprout.co.id',
        to: 'kevin.gading@sprout.co.id',
        subject: 'This is a Subject',
        text: 'This is a Text...'
    });

    //any logic ...
}
```

## 💎 Modules

- N/A

## ✨ Contributing

Please make sure to read the [Contributing Guide](https://github.com/kevin-archie/arc-mail-sender/blob/next/CONTRIBUTING.md) before making a pull request.

## 📘 Credits

Thanks to all the people who already contributed to Arc-Mail-Sender!

<a href="https://github.com/faker-js/faker/graphs/contributors"><img src="https://opencollective.com/fakerjs/contributors.svg?width=800" /></a>

## 📝 Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/kevin-archie/arc-mail-sender/blob/next/CHANGELOG.md).

## 🔑 License

[SIC](https://github.com/kevin-archie/arc-mail-sender/blob/next/LICENSE)
