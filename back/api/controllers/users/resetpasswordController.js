/*
 * Import Module
 ****************/
const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    User = require('../../database/models/users'),
    nodemailer = require('nodemailer'),
    templateNewUser = require('../../template/templateNewUser'),
    templateRecoverPassword = require('../../template/templateRecoverPassword'),
    randtoken = require('rand-token')

// Déclaration de notre transporter
// C'est en quelque sorte notre connexion à notre boite mail
transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER_MAILER, // Env utilisateur
        pass: process.env.PASSWORD_MAILER, // Env password
    }
})

/*
 * Controller
 *************/
module.exports = {
    // Method Post
    passwordReset: async(req, res, next) => {

        const { email } = req.body;

        User.findOne({ email }, (error, userEmail) => {

            if (userEmail) {

                // On enregistre le token et l'email dans la session
                req.session.tokenPWD = userEmail.token
                req.session.email = userEmail.email

                const { pseudo, token } = userEmail

                // On déclare une constante (Template de l'email)
                templateRecoverPassword(email, pseudo, token)
                const mailOptions = templateRecoverPassword(email, pseudo, token)

                // On demande à notre transporter d'envoyer notre mail
                transporter.sendMail(mailOptions, (err, info) => {
                    if (err) console.log(err)
                    else {
                        // req.flash('success', 'Un e-mail vient de vous être envoyé sur ' + user + ' !')
                        // req.session.success = req.flash('success')
                        // res.redirect('/')
                    }
                })

                let success = true,
                    tokenPWD = token
                    emailPWD = email

                    res.json({
                        success,
                        tokenPWD,
                        emailPWD
                    })

            } else {


            }

        })

    },
    get: (req, res) => {

        const token = req.session.tokenPWD,
            email = req.session.email;

        console.log(req.session);    

        // Si la clé token et l'adresse email est vide on redirige vers l'accueil
        if (tokenPWD == '' || email == '') {

            res.redirect('/')

        } else {

            // On recherche la clé token dans le model users
            User.findOne({ 'token': req.session.tokenPWD, 'email': req.session.email }, (err, user) => {

                // Si erreur on redirige vers l'accueil
                if (err) return res.redirect('/')

                // On compare dans la BDD le token et l'email dans l'input 
                if (token != user.token, email != user.email) {

                    res.redirect('/')

                } else {

                    let success = true

                    res.json({
                        success
                    })

                }

            })


        }
    },
}