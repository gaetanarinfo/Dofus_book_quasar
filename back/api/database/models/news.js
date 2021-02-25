/*
 * Import Module
 ****************/
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    randtoken = require('rand-token')

// MongoDb Collection Model News
const NewsShema = new mongoose.Schema({

    author: {
        type: String,
        default: 'Dofus-Book'
    },
    avatar: {
        type: String,
        default: 'https://play-lh.googleusercontent.com/DwTsGsKrvYPsC-TzKc-3dasiEgIwVOUY5wgTT94XPzcHJP-5V5pvSKZ9v1j1m85OdFfm'
    },
    title: {
        type: String
    },
    image: {
        type: String
    },
    content: {
        type: String
    },
    url: {
        type: String
    },
    dateCreate: {
        type: String,
        default: new Date()
    },
    category: {
        type: String
    },
    cat: {
        type: String
    }
});

NewsShema.pre('save', function(next) {

    next()

})

/*
 * Export Module
 ****************/
module.exports = mongoose.model('articles', NewsShema);