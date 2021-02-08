/*
 * Server.js
 ******************************/

const
    express = require('express'),
    app = express(),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    port = process.env.PORT || 4000;

// Method-Override
app.use(methodOverride('_method'))

// Cors
app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

// Mysql
db = mysql.createConnection({
    host: 'localhost',
    user: 'gaetan',
    password: '123456',
    database: 'dofus'
});

db.connect((err) => {
    if (err) console.error('error connecting: ' + err.stack);
    console.log('connected as id ' + db.threadId);
});

// Express Static (Permet de pointer un dossier static sur une URL)
// Exemple: le chemin /assets nous donnera accès au dossier public
app.use(express.static('public'));

// Body Parser qui nous permet de parser des data d'une req a une autre
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Router
const ROUTER = require('./controllers/router')
app.use(ROUTER)

// Lancement de l'application
app.listen(port, () => {
    console.log("le serveur tourne sur le port: " + port);
});