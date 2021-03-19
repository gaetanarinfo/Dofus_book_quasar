const Galerie = require('../../database/models/Galerie')

module.exports = {

    get: (req, res) => {

        Galerie
            .find()
            .exec((err, data) => {

                res.send({ galerie: data })

            })

    }

}