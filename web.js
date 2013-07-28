var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var text =  fs.readFileSync('index.html').toString();    
  response.send(text);
});

app.get('/old', function(request, response) {
    var text = fs.readFileSync('index2.html').toString();
    response.send(text);
});

app.get('/example', function(request, response) {
    var text = fs.readFileSync('index3.html').toString();
    response.send(text);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
