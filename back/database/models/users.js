/*
 * Import Module
 ****************/
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt')

// MongoDb Collection Model Users
const UsersShema = new mongoose.Schema({

    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    pseudo: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    status: {
        type: String
    }

});

UsersShema.pre('save', function(next) {

    next()

})

/*
 * Export Module
 ****************/
module.exports = mongoose.model('users', UsersShema);