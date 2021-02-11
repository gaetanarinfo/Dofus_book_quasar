/*
 * Server.js
 ******************************/

const
    express = require('express'),
    app = express(),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cors = require('cors'),
    port = process.env.PORT || 8000;

// Package de BDD gerer avec mongodb et atlas cloud et gestion des sessions
const MongoStore = require('connect-mongo'),
    mongoose = require('mongoose'),
    mongoStore = MongoStore(expressSession)

// Package de configuration sécurisé pour le portfolio
require('dotenv').config()

// Module pour le lancement de la BDD
require('./database/db')

// Cors
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.header('origin'))
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// Express Static (Permet de pointer un dossier static sur une URL)
// Exemple: le chemin /assets nous donnera accès au dossier public
app.use(express.static('public'));

// Body Parser qui nous permet de parser des data d'une req a une autre
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Module App gestion des cookies
app.set('trust proxy', 1) // trust first proxy
app.use(expressSession({
    secret: 'labelleauboisdormanssursonarbreperché',
    name: 'dofus-book',
    saveUninitialized: false,
    secure: false,
    resave: true,
    cookie: {
        path: '/',
        maxAge: 1000000
    },
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}))

// cookieParser should be above session
app.use(cookieParser())

// Router
const ROUTER = require('./controllers/router')
app.use(ROUTER)

// Page Err 404
app.use((req, res) => {
    res.send('err404')
})

// Ecoute de notre app
app.listen(port, () => {
    console.log('le serveur tourne sur le port: ' + port)
})