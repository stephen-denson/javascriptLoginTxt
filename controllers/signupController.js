//declaring requirements

var fs = require('fs');
var flash = require('req-flash');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});
module.exports = function(app){

app.get('/signup', function(req, res){
	res.render('signup');

});

//storing data in txt file
app.post('/signup', function(req, res){
	console.log(req.body);
	fs.writeFile('data.txt', req.body.username + "\n" + req.body.pword + "\n" + req.body.email + "\n", function (err){
		if(err){
			req.flash("Success", "There was some problem");
			res.redirect("/signup")
		}
		console.log("Credentials stored");
		req.flash("Success", "Registration Complete");
		res.redirect("/");
	})
	
});

app.delete('/signup', function(req, res){

});

};	