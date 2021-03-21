/*
 * Import Module
 ****************/
const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    User = require('../../database/models/Users'),
    Mailbox = require('../../database/models/Mailbox'),
    nodemailer = require('nodemailer'),
    templateNewUser = require('../../template/templateNewUser'),
    formidable = require('formidable'),
    path = require('path'),
    folder = path.join(__dirname, '../../../public/avatar'),
    extIP = require("ext-ip")(),
    moment = require('moment')

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

        } else {
            const { email } = req.body

            User.findOne({ email }, (err, user) => {

                const password = req.body.password,
                    banned = user.isBanned

                if (!banned) {

                    bcrypt.compare(password, user.password, (error, same) => {
                        if (same) {

                            if (err) {
                                //console.log(err)

                                // eslint-disable-next-line padded-blocks
                            } else if (user) {
                                // eslint-disable-next-line padded-blocks

                                extIP.get((err, ip) => {
                                    if (err) {
                                        //console.error("callback error: " + err);
                                    } else {

                                        moment.locale('fr')

                                        User
                                            .findOneAndUpdate({ '_id': user.id }, {
                                                isLog: moment().format('LLLL'),
                                                isLogout: moment().add(1, 'hours').format('LLLL'),
                                                ip: ip
                                            }, (error) => {});

                                        const payload = {
                                            _id: user._id,
                                            status: user.status,
                                            admin: user.isAdmin,
                                            email: user.email,
                                            pseudo: user.pseudo,
                                            lastname: user.lastname,
                                            firstname: user.firstname,
                                            avatar: user.avatar
                                        }

                                        let token = jwt.sign(payload, 'token', {
                                            expiresIn: 6000
                                        })

                                        var decoded = jwt.decode(token, { complete: true });

                                        const sess = decoded.payload

                                        res.send({
                                            token,
                                            sess
                                        })

                                    }
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

        if (decoded != null) {

            User.findOne({ _id: decoded.payload._id }, (err, data) => {

                moment.locale('fr')

                const dateNow = moment().format('LLLL');

                if (dateNow > data.isLogout) {

                }

                res.send({
                    userData: data
                })

            })

        }

    },
    getProfilId: (req, res) => {

        User.findOne({ _id: req.params.id }, (err, data) => {

            res.send({
                userData: data
            })

        })

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
    editProfilAvatar: (req, res) => {

        const form = new formidable.IncomingForm()

        form.uploadDir = folder

        form.parse(req, (_, fields, files) => {

            const t = JSON.stringify(files),
                r = JSON.parse(t),
                test = Object.keys(files),
                valueArray = JSON.stringify(test),
                resu = valueArray.replace(/["*+?^${}()|[\]\\]/g, ''),
                resuAvatar = r[resu].path.slice(67),
                id = req.params.id

            User.findById({ _id: id }, (err, user) => {

                if (user) {

                    User.updateOne({ _id: id }, { avatar: process.env.URL_PUBLIC + 'avatar/' + resuAvatar, name: resuAvatar, }, (err) => {

                        if (err) {

                            res.send(err)

                        } else {


                        }
                    })

                }

            })

        })

    },
    deleteAccount: (req, res) => {

        User
            .findOneAndRemove({ _id: req.params.id }, (err, rep) => {

                if (err) {
                    let error = true
                    res.send({ error })
                }

                let success = true

                res.send({ success })

            })

    },
    mailbox: (req, res) => {

        Mailbox.find({ recipient: req.params.pseudo })
            .lean()
            .sort('-dateCreate')
            .exec((err, data) => {
                if (err) console.log(err)

                res.send({
                    listMail: data
                })

            })

    },
    mailpost: (req, res) => {

        Mailbox

        const mailbox = new Mailbox({
            ...req.body,
            dateCreate: new Date()
        })

        mailbox.save((err) => {

            if (err) {
                let error = true
                res.send({ error })
            }

            let success = true

            res.send({ success })
        })

    },
    recipientList: (req, res) => {

        User
            .find()
            .exec((err, user) => {

                res.send({ listRecipient: user })

            })

    },
    mailDelete: (req, res) => {

        Mailbox
            .findOneAndRemove({ _id: req.params.id }, (err, rep) => {

                if (err) {
                    let error = true
                    res.send({ error })
                }

                let success = true

                res.send({ success })

            })

    },
    mailNotif: (req, res) => {

        User
            .findById({ _id: req.params.id })
            .exec((err, user) => {

                if (user !== undefined) {

                    Mailbox.find({ recipient: user.pseudo })
                        .exec((err, data) => {
                            if (err) console.log(err)

                            Mailbox.countDocuments({ recipient: user.pseudo })
                                .exec((err, count) => {

                                    res.send({ notif: count })

                                })

                        })

                }

            })
    },
    contact: (req, res) => {

        // On configure notre mail à envoyer par nodemailer
        const mailOptions = {
            from: 'Contact Dofus Book',
            to: 'support@dofus-book.fr',
            subject: req.body.name + ' - ' + req.body.sujet + ' - ' + req.body.email,
            html: req.body.content
        }

        // On demande à notre transporter d'envoyer notre mail
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                let error = true
                res.send({ error })
            }

            let success = true

            res.send({ success })

        })
    },

}