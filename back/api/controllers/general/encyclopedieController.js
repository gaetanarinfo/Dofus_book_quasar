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
    },
    getClassesId: (req, res) => {

        let files2 = fs.readFileSync(__dirname + '/json/classesId.json'),
            dataClasses = JSON.parse(files2)

        dataClasses.forEach(data => {

            if (data.name == req.params.title) {

                res.send({ classesId: data })

            }

        });
    }

}