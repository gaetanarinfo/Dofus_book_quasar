/*
 * Import Module
 ****************/
const mongoose = require('mongoose')

// MongoDb Collection Model Notif
const NotifShema = new mongoose.Schema({

    color: {
        type: String,
        default: 'brown'
    },
    icon: {
        type: String,
        default: 'announcement'
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    sujet: {
        type: String
    },
    content: {
        type: String
    },
    userId: {
        type: String
    }

});

// Déclaration du model Notif dans mongodb
const Notif = mongoose.model('notifs', NotifShema);

/*
 * Export Module
 ****************/
module.exports = Notif;