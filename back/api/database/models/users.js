/*
 * Import Module
 ****************/
const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    randtoken = require('rand-token')

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
    token: {
        type: String,
        default: randtoken.generate(30)
    },
    status: {
        type: String,
        default: "user"
    },
    isBanned: {
        type: Boolean,
        default: false
    }
});

UsersShema.pre('save', function(next) {

    const users = this

    // On hash le mot de passe avec un force 10 pour mieux sécuriser le mot de passe
    bcrypt.hash(users.password, 10, (error, encrypted) => {
        users.password = encrypted
        next()
    })

})

/*
 * Export Module
 ****************/
module.exports = mongoose.model('users', UsersShema);