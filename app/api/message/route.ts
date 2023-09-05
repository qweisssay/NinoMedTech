import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';




export async function POST (req:Request) { 
    const body =await req.json();
    const subject = body.subject;
    const text = body.text
  console.log(subject)
  const transporter:Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ninomedicalsales@gmail.com", // generated ethereal user
      pass: "hsqpoyssilhbntfe", // generated ethereal password
    },
  });

  
  const mailOptions = {
    from: 'ninomedicalsales@gmail.com', 
    to: 'ninomedical@mail.ru', 
    subject: subject, 
    text:text, 
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      NextResponse.json('Ошибка при отправке письма');
    } else {
      console.log('Письмо успешно отправлено: ' );
      
      NextResponse.json({subject,text});
    }
  });
}