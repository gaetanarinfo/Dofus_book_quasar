/*
 * Import Module
 ****************/
const mongoose = require('mongoose')

// MongoDb Collection Model Rating
const RatingShema = new mongoose.Schema({

    ip: String,
    rating: Number,

});

// Déclaration du model Rating dans mongodb
const Rating = mongoose.model('ratings', RatingShema);


RatingShema.pre('save', function(next) {

    next()

})

/*
 * Export Module
 ****************/
module.exports = Rating;