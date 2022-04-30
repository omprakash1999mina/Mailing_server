const nodemailer = require('nodemailer');
const mailController = {
    async sendMail(req, res, next){

        const mailTransporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_KEY
            }
        });

        const info = await mailTransporter.sendMail({
            from: 'omprakash@opdevelopers.live',
            to: 'op1999mina@gmail.com',
            subject: 'For Fun',
            text: 'this is a test mail in perpose to test the email  testing feature',
        })
        console.log(info);
    }
}
export default mailController;