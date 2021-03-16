const Encyclopedie = require('../../database/models/Encyclopedie'),
    fs = require('fs'),
    JsonFind = require("json-find");

let files = fs.readFileSync(__dirname + '/json/classes.json'),
    files2 = fs.readFileSync(__dirname + '/json/classesId.json'),
    files3 = fs.readFileSync(__dirname + '/json/professions.json'),
    files4 = fs.readFileSync(__dirname + '/json/monsters.json'),
    dataClasses = JSON.parse(files),
    dataClasses2 = JSON.parse(files2),
    dataMetiers = JSON.parse(files3),
    dataMonstres = JSON.parse(files4)

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
        res.send({ classes: dataClasses })
    },
    getClassesId: (req, res) => {
        dataClasses2.forEach(data => {

            if (data.name == req.params.title) {

                res.send({ classesId: data })

            }

        });
    },
    getClassesRoles: (req, res) => {

        let dataArray = [];

        for (let i = 0; i < dataClasses.length; i++) {

            if (dataClasses[i].roles1 == req.params.roles || dataClasses[i].roles2 == req.params.roles || dataClasses[i].roles3 == req.params.roles) {
                dataArray.push(dataClasses[i]);
            } else if (req.params.roles === "All") {
                dataArray.push(dataClasses[i]);
            }

        }

        res.send({ classesRoles: dataArray })

    },
    getMetiers: (req, res) => {
        res.send({ metiers: dataMetiers })
    },
    getMetiersId: (req, res) => {

        dataMetiers.forEach(data => {

            if (data._id == req.params.id) {

                console.log(data);

                res.send({ metiersId: data })

            }

        });
    },
    getMonstres: (req, res) => {
        res.send({ monstres: dataMonstres })
    }

}