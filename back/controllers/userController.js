const bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken'),
    User = require('../database/models/users')

/*
 * Import Module
 ****************/

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
                // , dbUser = await User.find({})
                // L'on déclare la récupération de notre req.session pour pouvoir lui attribuer notre function
                // Par la suite
                // eslint-disable-next-line comma-style
                , sess = req.session

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
                                    email: User.email,
                                    pseudo: User.pseudo
                                }

                                let token = jwt.sign(payload, 'token', {
                                    expiresIn: 1440
                                })

                                // console.log('OK 1')
                                sess.email = User.email
                                sess.status = User.status
                                sess.pseudo = User.pseudo
                                sess.userId = User._id
                                sess.token = token

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

                        User.create({
                            ...req.body
                        })

                        next()

                    }

                })
            }

        })
    },
    // Method Post
    passwordReset: async(req, res, next) => {

        const { email } = req.body;

        User.findOne({ email }, (error, userEmail) => {

            if (userEmail) {

                console.log('Email trouvé');

            } else {
                console.log('Email pas trouvé');
            }

        })

    }
}