const jwt = require('jsonwebtoken'),
    User = require('../database/models/users')

module.exports = {
    get: async(req, res) => {

        //console.log(req.params.token);

        jwt.verify(req.body.token, process.env.JWT_TOKEN, (err, token) => {
            if (err) res.json('Token non Valid')
            else {

                const token = jwt.sign({
                    email: User.email,
                    status: User.status
                })

                console.log(token);

                res.send({ token })
            }
        })
    }

}