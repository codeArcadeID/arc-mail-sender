import { createTransport } from 'nodemailer';

interface EmailOptions {
    from?: string;
    to: string | string[];
    subject: string;
    text: string;
}

export default class BrevoSender {
    transporter: ReturnType<typeof createTransport>;

    constructor() {
        this.transporter = createTransport({
            host: process.env.SMTP_HOST as string,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER as string,
                pass: process.env.SMTP_KEY as string,
            },
        });
    }

    async send({ from, to, subject, text }: EmailOptions) {
        const recipients = Array.isArray(to) ? to.join(', ') : to;

        const mailOptions = {
            from: from || process.env.SMTP_FROM as string,
            to: recipients,
            subject,
            text,
        };

        return this.transporter.sendMail(mailOptions);
    }
}
