/*
 * Import Module
 ****************/
const News = require('../../database/models/News')

/*
 * Controller
 *************/
module.exports = {
    get: (req, res) => {

        var perPage = 4

        // La page que l'on veux récupéré si il y a en pas alors page 1
        var page = req.query.page || 1
        var arrayPagesIndexes = []

        News
            .find()
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .sort('-dateCreate')
            .exec((err, data) => {

                res.send({ listNews: data })

            })

    },
    get2: (req, res) => {

        News
            .find()
            .sort('-dateCreate')
            .exec((err, data) => {

                res.send({ listNews2: data })

            })

    },
    get3: (req, res) => {

        const cat = req.params.cat

        News
            .find({ cat: cat })
            .lean()
            .exec((err, data) => {

                if (data === undefined) {

                } else {

                    res.send({ listNews3: data })

                }

            })

    },
    post: (req, res) => {

        const url = req.protocol + '://' + req.get('host')

        News

        const news = new News({
            title: req.body.title,
            content: req.body.content,
            url: req.body.url,
            cat: req.body.cat,
            category: req.body.category,
            image: url + '/news/' + req.files[0].filename
        })

        news.save((err) => {

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

    },
    getId: (req, res) => {

        News
            .findOne({ _id: req.params.id })
            .lean()
            .exec((err, data) => {

                if (data === undefined) {

                } else {

                    res.send({ articleId: data })

                }

            })

    },
    editId: (req, res) => {

        News
            .updateOne({ _id: req.params.id }, {
                title: req.body.title,
                content: req.body.content,
                content2: req.body.content2,
                url: req.body.url,
                cat: req.body.cat,
                category: req.body.category
            }, (err, data) => {

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

    },
    deleteId: (req, res) => {

        News
            .findOneAndRemove(({ _id: req.params.id }), (err, data) => {

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