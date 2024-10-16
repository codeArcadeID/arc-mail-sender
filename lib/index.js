const BrevoSender = require('./client/brevo');
const SendgridSender = require('./client/sendgrid');

exports.brevoSender = BrevoSender;
exports.sendgridSender = SendgridSender;