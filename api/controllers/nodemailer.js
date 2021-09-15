exports.send_email = (lembur) => {
    require('dotenv').config()
    
    const nodemailer = require('nodemailer')
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pklsija2021@gmail.com',
            pass: process.env.PASSWORD
        }
    })
    
    let mailOptions = {
        from: 'pklsija2021@gmail.com',
        to: 'fikreynursyabani@gmail.com',
        subject: 'Izin Lembur Pegawai PT. GTI',
        text: `Nama Lengkap\t : ${lembur.fullName}\nAlasan\t\t\t : ${lembur.reasons}\nJam\t\t\t : ${lembur.startTime.toLocaleTimeString()}-${lembur.endTime.toLocaleTimeString()}`
    }
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
            console.log(err)
        }else {
            console.log('Mail Sent!')
        }
    })
}

