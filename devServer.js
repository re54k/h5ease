var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/src'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
