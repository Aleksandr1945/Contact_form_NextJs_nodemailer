export default function (req, res) {
    require('dotenv').config()
    console.log(req.body)
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,

      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
      secure: true,
    })
    const mailData = {
      from: 'a.s.lisenkov@yandex.ru',
      to: 'a.s.lisenkov@yandex.ru',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }