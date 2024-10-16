export const brevoSender = async () => {
    const BrevoSender = (await import('./client/brevo')).default;
    return new BrevoSender();
};

export const sendgridSender = async () => {
    const SendgridSender = (await import('./client/sendgrid')).default;
    return new SendgridSender();
};
