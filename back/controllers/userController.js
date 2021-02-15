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
            console.log('pas ds la db')
            res.redirect('/login')
        } else {
            const { email, password } = req.body
                // , dbUser = await User.find({})
                // L'on déclare la récupération de notre req.session pour pouvoir lui attribuer notre function
                // Par la suite
                // eslint-disable-next-line comma-style
                , sess = req.session

            User.findOne({ email, password }, (err, User) => {
                if (err) {
                    console.log(err)

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
                    console.log(err)
                }

            })
        }
    },
    // Method Post
    register: async(req, res, next) => {
        // const dbUser = await User.find({})
        User.create({
            ...req.body
        })
        next()
    }
}