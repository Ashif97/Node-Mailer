require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

let mailOptions = {
    from: `"Your Name" <${process.env.EMAIL_USER}>`,
    to: 'ashiflatheef149@gmail.com',
    subject: 'Node mailer',
    text: 'Hi sir, sending the mail through node mailer',
    
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});

