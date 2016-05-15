
var express = require('express');
var Config = require('./config');

var app = express();
var config = new Config();
    
app.get('/', function (req, res) {
  res.send('Hello world from ' + config.name);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening...');
});
