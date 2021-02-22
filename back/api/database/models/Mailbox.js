/*
 * Import Module
 ****************/
const mongoose = require('mongoose')

// MongoDb Collection Model Comment
const MailboxShema = new mongoose.Schema({

    author: String,
    recipient: String,
    lastname: String,
    firstname: String,
    sujet: String,
    dateCreate: {
        type: Date,
        default: new Date()
    },
    avatar: String,
    content: {
        type: String
    }

});

// Déclaration du model comment dans mongodb
const Mailbox = mongoose.model('mailboxs', MailboxShema);

/*
 * Export Module
 ****************/
module.exports = Mailbox;