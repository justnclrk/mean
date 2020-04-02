const express = require("express");
const app = express();
const path = require("path");


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/cars.html', function(request, response) {
    response.sendFile(path.join(__dirname+'/cars.html'));
})

app.get('/cats.html', function(request, response) {
    response.sendFile(path.join(__dirname+'/cats.html'));
})

app.get('/form.html', function(request, response) {
    response.sendFile(path.join(__dirname+'/form.html'));
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})