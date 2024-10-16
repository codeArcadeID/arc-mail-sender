"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = require("nodemailer");
class BrevoSender {
    constructor() {
        this.transporter = (0, nodemailer_1.createTransport)({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_KEY,
            },
        });
    }
    send(_a) {
        return __awaiter(this, arguments, void 0, function* ({ from, to, subject, text }) {
            const mailOptions = {
                from: from || process.env.SMTP_FROM,
                to,
                subject,
                text,
            };
            return this.transporter.sendMail(mailOptions);
        });
    }
}
exports.default = BrevoSender;
