const Encyclopedie = require('../../database/models/Encyclopedie'),
    fs = require('fs')

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
    },
    getClasses: (req, res) => {
        let files2 = fs.readFileSync(__dirname + '/json/classes.json'),
            dataClasses = JSON.parse(files2)

        res.send({ classes: dataClasses })
    }

}