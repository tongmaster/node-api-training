var express = require('express');
var app = express();

var hero = [];

var cors = require('cors');
var bodyParser = require('body-parser');
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});
//enables cors
app.use(cors());
app.use(bodyParser.json())

app.get('/get',function(req , res){
    res.send(JSON.stringify(hero));
});

app.post('/post',function(req , res){
    // console.log("post "+req.body);
    var id = new Date().getTime()
    // console.log("post "+hero.length+"   "+a);
    // if(hero.length) 
    hero.push({id: id , name : req.body.name});
    // var ret = {status : 'success' , heroes : hero};
    // console.log("json "+JSON.stringify(ret));
    // res.send(JSON.stringify(ret));
    console.log((req.headers.authentication));
    res.send(JSON.stringify(hero))
});

app.listen("3000");