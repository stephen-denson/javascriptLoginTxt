// declaring requirements 

var express = require('express');
var signupController = require('./controllers/signupController');
var loginController = require('./controllers/loginController');
var welcomeController = require('./controllers/welcomeController');
const bodyParser = require('body-parser');
const {check, validationResult } = require('express-validator');
var fs = require('fs');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var val = 0;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());
app.use(session({
    secret: "secret123",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// setting view engine to EJS
app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static('./public'));

// Firing controllers
loginController(app);

signupController(app);

welcomeController(app);


// Setting up server at port 3000
app.listen(3000);
console.log('port 3000');
