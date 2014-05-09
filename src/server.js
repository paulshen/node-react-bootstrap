var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.send('Hello!');
});

app.use(express.static(__dirname + '/public'));
app.listen(3001);
