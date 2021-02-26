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

        console.log(req.body);

        const url = req.protocol + '://' + req.get('host')

        News

        const news = new News({
            title: req.body.title,
            content: req.body.content,
            url: req.body.url,
            cat: req.body.cat,
            image: url + '/public/news/' + req.files[0].filename
        })

        news.save((err) => {

            if (err) {

            }
        })

    }
}