/*
 * Import Module
 ****************/
const News = require('../../database/models/news')

/*
 * Controller
 *************/
module.exports = {
    get: (req, res) => {

        var perPage = 6

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
    post: (req, res) => {

        const url = req.protocol + '://' + req.get('host')

        News

        const news = new News({
            title: req.body.title,
            content: req.body.content,
            url: req.body.url,
            cat: req.body.cat,
            category: req.body.category,
            image: url + '/public/news/' + req.files[0].filename
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
    editId: (req, res) => {

        News
            .updateOne({ _id: req.params.id }, {
                title: req.body.title,
                content: req.body.content,
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
            .findOneAndRemove(({_id: req.params.id}), (err, data) => {

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