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
    },
    post: (req, res) => {
        const url = req.protocol + '://' + req.get('host')

        Galerie

        const galerie = new Galerie({
            title: req.body.title,
            img: url + '/galerie/' + req.files[0].filename
        })

        galerie.save((err) => {

            if (err) {

                let error = true

                res.json({
                    error
                })

            }

            let success = true

            res.send({
                success
            })
        })
    }

}