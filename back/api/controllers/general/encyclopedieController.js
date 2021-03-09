const Encyclopedie = require('../../database/models/Encyclopedie')

/*
 * Controller
 *************/
module.exports = {
    get: (req, res) => {
        Encyclopedie
            .find()
            .lean()
            .exec((err, data) => {

                res.send({
                    data: data
                })

            })
    }
}