/*
 * Import Module
 ****************/
const mongoose = require('mongoose')

// MongoDb Collection Model Encyclopedie
const EncyclopedieShema = new mongoose.Schema({

    title: String,
    imgPos: String

});

// Déclaration du model Encyclopedie dans mongodb
const Encyclopedie = mongoose.model('encyclopedies', EncyclopedieShema);

/*
 * Export Module
 ****************/
module.exports = Encyclopedie;