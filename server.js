require('dotenv').config();
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_KEY
    }
});

async function SendMail() {

	let info = await mailTransporter.sendMail({
		from: 'omprakash@opdevelopers.live',
		to: 'op1999mina@gmail.com',
		subject: 'For Fun',
		text: 'this is a test mail in perpose to test the email  testing feature',
	})
	console.log(info);
}

SendMail();
// let mailDetails = {
// 	from: 'op1999mina@gmail.com',
// 	to: 'omprakash@opdevelopers.live',
// 	subject: 'Test mail',
// 	text: 'Node.js testing mail for GeeksforGeeks'
// };

// mailTransporter.sendMail(mailDetails, function(err, data) {
// 	if(err) {
// 		console.log('Error Occurs : ');
// 	} else {
// 		console.log('Email sent successfully :' + data);
// 	}

// });

console.log('end of progarm')
