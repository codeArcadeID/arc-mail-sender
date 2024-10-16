import sgMail from '@sendgrid/mail';

interface EmailOptions {
    from?: string;
    to: string;
    subject: string;
    text: string;
}

export default class SendgridSender {
    transporter: typeof sgMail;

    constructor() {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
        this.transporter = sgMail;
    }

    async send({ from, to, subject, text }: EmailOptions) {
        const mailOptions = {
            from: from || process.env.SMTP_FROM as string,
            to,
            subject,
            text,
        };

        return this.transporter.send(mailOptions);
    }
}
