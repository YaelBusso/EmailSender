require('dotenv').config();
const nodemailer = require('nodemailer');
const hbs=require('nodemailer-handlebars');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

transporter.use("compile", hbs({
    viewEngine: {
        partialsDir: "views",
        defaultLayout:""
    },
    viewPath: "views",
    extName: ".handlebars"
}));
/* to: 'levanabusso@gmail.com, yaelbusso@gmail.com', // TODO: email receiver*/
let mailOptions = {
    from: 'y0583239076@gmail.com', // TODO: email sender
    to: 'inbaln10@gmail.com', // TODO: email receiver
    cc: 'inbaln10@gmail.com',
    bcc: 'inbaln10@gmail.com',
    subject: 'שליחת מייל :)',
    /*text: 'Work?!',*/
    attachments:[
        {filename: 'picture.JPG', path:'./picture.JPG'}
    ],
    template: 'main',
    context:{
        name: 'La La La'
    }
};

transporter.sendMail(mailOptions)
    .then(function(res){
        console.log('Email sent!!!');
    })
    .catch(function(err){
        console.log('Error:', err);
    });
