const Galerie = require('../../database/models/Galerie')

module.exports = {

    get: (req, res) => {

        Galerie
            .find()
            .exec((err, data) => {

                res.send({ galerie: data })

            })

    },
    getId: (req, res) => {

        Galerie
            .findOne({ _id: req.params.id })
            .lean()
            .exec((err, data) => {

                if (data === undefined) {

                } else {

                    res.send({ imagesId: data })

                }

            })
    }

}