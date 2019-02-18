const nodemailer = require('nodemailer')
const handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')

const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
    }
})

const sendActivationEmail = async (email, token) => {
    const url = `${process.env.URL_BASE}/activate?token=${token}`
    const data = fs.readFileSync(path.join(__dirname, 'templates', 'activation.hbs'), 'utf8')
    const template = handlebars.compile(data)
    const mailOptions = {
        from: process.env.MAILER_FROM,
        to: email,
        subject: 'Welcome to SQLReport!',
        html: template({ url })
    }

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return console.log(error)
        }
    })
}

const sendRecoveryEmail = async (email, activation) => {
    const url = `${process.env.RESET_PASSWORD_URL}?code=${activation}`
    const data = fs.readFileSync(path.join(__dirname, 'templates', 'recovery.hbs'), 'utf8')
    const template = handlebars.compile(data)
    const mailOptions = {
        from: process.env.MAILER_FROM,
        to: email,
        subject: 'SQL Report - Recovery Account',
        html: template({ url })
    }

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return console.log(error)
        }
    })
}

module.exports = {
    sendActivationEmail,
    sendRecoveryEmail
}

