"use strict";

/*
 * Server.js
 ******************************/
var express = require('express'),
    app = express(),
    expressSession = require('express-session'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cors = require('cors'),
    port = process.env.PORT || 4000; // Method-Override


app.use(methodOverride('_method')); // Cors

app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'PUSH', 'POST', 'PUT', 'DELETE'],
  credentials: true
})); // Mysql

db = mysql.createConnection({
  host: 'localhost',
  user: 'gaetan',
  password: '123456',
  database: 'dofus'
});
db.connect(function (err) {
  if (err) console.error('error connecting: ' + err.stack);
  console.log('connected as id ' + db.threadId);
}); // Express Static (Permet de pointer un dossier static sur une URL)
// Exemple: le chemin /assets nous donnera accès au dossier public

app.use(express["static"]('public')); // Body Parser qui nous permet de parser des data d'une req a une autre

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // Module App gestion des cookies

app.set('trust proxy', 1); // trust first proxy

app.use(expressSession({
  secret: 'labelleauboisdormanssursonarbreperché',
  name: 'dofus-book',
  saveUninitialized: false,
  resave: false,
  cookie: {
    path: '/',
    maxAge: 1000000
  }
}));
app.use('*', function (req, res, next) {
  res.locals.users = req.session.userId;
  next();
}); // Router

var ROUTER = require('./controllers/router');

app.use(ROUTER); // Lancement de l'application

app.listen(port, function () {
  console.log("le serveur tourne sur le port: " + port);
});