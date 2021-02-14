//declaring requirements

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});
var instream =fs.createReadStream('C:/Users/Stephen Denson/javascriptLoginTxt/data.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var arr = [];

// declaring readline function to deal with text file
rl.on('line', function(line){
	arr.push(line);
});

rl.on('close', function(){
});

module.exports = function(app){

app.get('/', function(req, res){
	res.render('login');

});

//validating login details
app.post('/', function(req, res){

	if (req.body.username == arr[0] && req.body.password == arr[1]){
		const nameuser = arr[0];
		res.redirect("/welcome");
	}
	else{
		res.redirect("/signup")
	};

});

};