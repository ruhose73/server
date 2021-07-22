const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                //user: process.env.SMTP_USER,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                //refreshToken: process.env.REFRESH_TOKEN,
                //accessToken: process.env.ACCESS_TOKEN
            }
        })
    }

    async sendActivationMail(to, link)  {

        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккуанта',
            text: '', 
            html: ` <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>`,
            auth: {
                user: process.env.SMTP_USER,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN
            }
        })

    }

}

module.exports = new MailService()