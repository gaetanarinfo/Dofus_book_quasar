const { create } = require('lodash');
const Rating = require('../../database/models/Rating')

/*
 * Controller
 *************/
module.exports = {
    post: (req, res) => {

        Rating
            .findOne({ ip: req.body.ip })
            .exec((err, data) => {

                if (err) res.send(err)

                if (!data) {

                    Rating
                        .create({

                            ...req.body

                        }, (err) => {
                            if (err) {

                                let error = true

                                res.send({
                                    error
                                })

                            } else {

                                let success = true

                                res.send({
                                    success
                                })

                            }

                        })

                } else {
                    let error = true

                    res.send({
                        error
                    })
                }

            })

    },
    get: (req, res) => {

        Rating
            .find()
            .lean()
            .exec((err, data) => {

                let array = [],
                    number = 0

                for (let i = 0; i < data.length; i++) {

                    // console.log('Ratings : ', data[i].rating);

                    array.push(data[i].rating)

                    number += data[i].rating

                }

                // console.log('Tableau rating : ', array);

                let count = number,
                    sum = array.reduce(function(sum, item, index) {
                        count += item;
                        return sum + item * (index + 1);
                    }, 0);

                // console.log('Rating Final: ', sum / count);

                res.send({ dataRating: sum / count })

            })

    },
}