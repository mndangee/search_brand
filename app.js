const axios = require('axios');
var express = require('express');
var app = express();

app.set('view engine','pug');
app.set('views','./views')

app.get('/main', function(req,res){
    res.send('<a href="/brand">brand</a>');
})

app.get('/brand', function(req, res){
    res.render('brand');
})

app.listen(8080, function(){
    console.log('connect http://localhost:8080/main')
})
