/*
 * Import Module
 ****************/
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    randtoken = require('rand-token')

// MongoDb Collection Model News
const NewsShema = new mongoose.Schema({

    author: {
        type: String
    },
    avatar: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    url: {
        type: String
    },
    dateCreate: {
        type: String
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