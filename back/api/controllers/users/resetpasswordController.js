/*
 * Import Module
 ****************/
const bcrypt = require('bcrypt'),
    User = require('../../database/models/users'),
    nodemailer = require('nodemailer'),
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
    // Methode post pour réinitialiser un nouveau mot de passe
    post: (req, res) => {

        // Déclaration des constantes
        const token = req.body.tokenPWD,
            email = req.body.email,
            password = req.body.password,
            password_confirm = req.body.password_confirm

        console.log(token, email, password, password_confirm);

        // On recherche l'utilisateur dans la BDD
        User.findOne({ 'token': token, 'email': email }, (err, user) => {
            if (err) return res.redirect('/') // Si erreur on redirige

            // On compare la mot de passe (Si il fait plus de 9 caractères)
            if (password.length > 9) {

                // On comparant les 2 mots de passe
                if (password == password_confirm) {

                    // On crypt le mot de passe
                    bcrypt.hash(req.body.password, 10, (error, encrypted) => {
                        User.findOneAndUpdate({ 'token': token, 'email': email }, {
                            password: encrypted,
                            token: randtoken.generate(30)
                        }, (error) => {});
                    })

                    let success = true

                    res.json({
                        success
                    })

                } else {
                    let error = true

                    res.json({
                        error
                    })
                }
            } else {
                let error2 = true

                res.json({
                    error2
                })
            }

        })
    }
}