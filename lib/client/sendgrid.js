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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = __importDefault(require("@sendgrid/mail"));
class SendgridSender {
    constructor() {
        mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
        this.transporter = mail_1.default;
    }
    send(_a) {
        return __awaiter(this, arguments, void 0, function* ({ from, to, subject, text }) {
            const mailOptions = {
                from: from || process.env.SMTP_FROM,
                to,
                subject,
                text,
            };
            return this.transporter.send(mailOptions);
        });
    }
}
exports.default = SendgridSender;
