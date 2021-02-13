var express = require('express');
var signupController = require('./controllers/signupController');
var loginController = require('./controllers/loginController');
const bodyParser = require('body-parser');
const {check, validationResult } = require('express-validator');
var fs = require('fs');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

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


app.set('view engine', 'ejs');

const urlencodedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static('./public'));

loginController(app);

signupController(app);

app.listen(3000);
console.log('port 3000');
