/*
 * Import Module
 ****************/
const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./users')

// MongoDb Collection Model Comment
const MailboxShema = new mongoose.Schema({

    author: String,
    dateCreate: {
        type: Date,
        default: new Date()
    },
    avatar: String,
    content: {
        type: String,
        required: [true, ""],
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }

});

// Déclaration du model comment dans mongodb
const Mailbox = mongoose.model('mailbox', MailboxShema);

/*
 * Export Module
 ****************/
module.exports = Mailbox;