var express = require('express');
var bodyParser = require('body-parser');


var app = express();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine','ejs');

app.get('/', function(req,res){
    res.send('Hi')
})

app.get('/test', function(req,res){
    res.render('profile')
})

app.post('/test', urlencodedParser, function(req,res){
    console.log(req.body)
    res.render('success', {data:req.body})
})

app.listen(3000);
