var express=require("express");
var bodyParser = require('body-parser');
var app=express();
var router=require("./router.js");
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));



app.use("/",router);

app.listen(3000);