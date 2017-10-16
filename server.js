var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(path.join(__dirname, "client"))); //serve client folder
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.json());
app.use(session({secret: 'mysecret'}));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(8000, function(){
  console.log('listening on port 8000');
})
