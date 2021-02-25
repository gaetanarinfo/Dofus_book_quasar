const jwt = require('jsonwebtoken'),
    User = require('../../database/models/users')

module.exports = {
    get: async(req, res) => {

        jwt.verify(req.body.token, process.env.JWT_TOKEN, (err, token) => {
            if (err) res.json('Token non Valid')
            else {

                const token = jwt.sign({
                    _id: User._id,
                    status: User.status,
                    admin: User.isAdmin,
                    email: User.email,
                    pseudo: User.pseudo,
                    lastname: User.lastname,
                    firstname: User.firstname,
                    avatar: User.avatar
                })

                res.send({ token })
            }
        })
    }

}