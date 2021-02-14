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

//declaring readline function
rl.on('line', function(line){
	arr.push(line);
});

rl.on('close', function(){

});

module.exports = function(app){

app.get('/welcome', function(req, res){
	const nameuser = arr[0];	
	res.render('welcome', {nameuser:nameuser});

});
}	