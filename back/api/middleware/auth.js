/*
 * Import Module
 ****************/
const User = require('../database/models/users');

/*
 * Controller
 *************/
module.exports = (req, res, next) => {

    // On recupere l'utilisateur dans le model users
    User.findById(req.session.userId, (error, user) => {

        if (error || !user) {
            return res.redirect('/')
        }

        next()
    })

}