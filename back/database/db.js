/*
 * Import Module
 ****************/
const mongoose = require('mongoose')

/*
 * Function mongoose pour l'export dans app.js
 *************/
mongoose
    .connect(process.env.MONGO_URI, { // URI = chemin
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connecté à la BDD'))
    .catch(err => console.log(err))