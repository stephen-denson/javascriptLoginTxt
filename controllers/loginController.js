var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});
var instream =fs.createReadStream('C:/Users/Stephen Denson/javascriptLoginTxt/data.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
var arr = [];

rl.on('line', function(line){
	arr.push(line);
});

rl.on('close', function(){
});

module.exports = function(app){

app.get('/', function(req, res){
	res.render('login');

});

app.post('/', function(req, res){
	if (req.body.username == arr[0] && req.body.password == arr[1]){
		const nameuser = arr[0];
		res.redirect("/welcome");
	}
	else{
		res.redirect("/signup")
	};

});

app.delete('/', function(req, res){

});

};	