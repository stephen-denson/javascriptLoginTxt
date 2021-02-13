var express = require('express');
var signupController = require('./controllers/signupController');
var loginController = require('./controllers/loginController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

loginController(app);

signupController(app);

app.listen(3000);
console.log('port 3000');
