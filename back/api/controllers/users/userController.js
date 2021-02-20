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
    // Methode de connexion push
    post: async(req, res) => {
        let userAuth = await User.findOne({ email: req.body.email })
            // const dbUserID = await User.find({})

        if (!userAuth) {

            let error = true

            res.json({
                error
            })

            res.redirect('/login')

        } else {
            const { email } = req.body

            User.findOne({ email }, (err, User) => {

                const password = req.body.password,
                    banned = User.isBanned

                if (!banned) {

                    bcrypt.compare(password, User.password, (error, same) => {
                        if (same) {

                            if (err) {
                                //console.log(err)

                                // eslint-disable-next-line padded-blocks
                            } else if (User) {
                                // eslint-disable-next-line padded-blocks

                                const payload = {
                                    _id: User._id,
                                    status: User.status,
                                    email: User.email,
                                    pseudo: User.pseudo,
                                    lastname: User.lastname,
                                    firstname: User.firstname,
                                    avatar: User.avatar
                                }

                                let token = jwt.sign(payload, 'token', {
                                    expiresIn: 60
                                })

                                var decoded = jwt.decode(token, { complete: true });

                                const sess = decoded.payload

                                res.send({
                                    token,
                                    sess
                                })
                            } else {
                                //console.log(err)
                            }


                        } else {
                            let error3 = true

                            res.json({
                                error3
                            })
                        }

                    })

                } else {

                    let error2 = true

                    res.json({
                        error2
                    })

                }

            })
        }
    },
    // Method Post
    register: async(req, res, next) => {

        const { email, pseudo } = req.body;

        User.findOne({ email }, (error, userEmail) => {

            if (userEmail) {

                if (userEmail.email === email) {

                    let error = true

                    res.json({
                        error
                    })

                }

            } else {

                User.findOne({ pseudo }, (error, userPseudo) => {

                    if (userPseudo) {

                        if (userPseudo.pseudo === pseudo) {

                            let error2 = true

                            res.json({
                                error2
                            })

                        }

                    } else {

                        const { lastname, firstname, email, pseudo } = req.body

                        // On déclare une constante (Template de l'email)
                        templateNewUser(lastname, firstname, email, pseudo)
                        const mailOptions = templateNewUser(lastname, firstname, email, pseudo)

                        // On demande à notre transporter d'envoyer notre mail
                        transporter.sendMail(mailOptions, (err, info) => {
                            if (err) console.log(err)
                            else {
                                // req.flash('success', 'Un e-mail vient de vous être envoyé sur ' + user + ' !')
                                // req.session.success = req.flash('success')
                                // res.redirect('/')
                            }
                        })

                        User.create({
                            ...req.body
                        })

                        next()

                    }

                })
            }

        })
    },
    getProfil: (req, res) => {

        // get the decoded payload and header
        var decoded = jwt.decode(req.params.token, { complete: true });

        const userEmail = decoded.payload.email,
            userPseudo = decoded.payload.pseudo,
            userLastName = decoded.payload.lastname,
            userFirstName = decoded.payload.firstname,
            userAvatar = decoded.payload.avatar,
            userId = decoded.payload._id

        res.send({ userEmail, userPseudo, userLastName, userFirstName, userAvatar, userId })

    },
    editProfil: async(req, res) => {

        const id = req.params.id

        User.findById({ _id: id }, (err, user) => {

            if (user) {

                const { email, pseudo, lastname, firstname } = req.body;

                User.updateOne({ _id: id }, { email: email, pseudo: pseudo, lastname: lastname, firstname: firstname }, (err) => {

                    if (err) {
                        let error = true

                        res.send({
                            error
                        })

                    } else {

                        let success = true

                        res.send({
                            success,
                            userEmail: email,
                            userPseudo: pseudo,
                            userLastName: lastname,
                            userFirstName: firstname
                        })
                    }
                })

            }

        })

    },
}