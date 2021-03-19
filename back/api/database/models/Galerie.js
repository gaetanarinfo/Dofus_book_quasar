/*
 * Import Module
 ****************/
const mongoose = require('mongoose')

// MongoDb Collection Model Galerie
const GalerieShema = new mongoose.Schema({

    title: String,
    img: String,
    dateCreate: String

});

// Déclaration du model Galerie dans mongodb
const Galerie = mongoose.model('galeries', GalerieShema);

/*
 * Export Module
 ****************/
module.exports = Galerie;