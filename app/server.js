var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
app.set('views', process.cwd() + '/src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('index', {
    requireMain: 'js/index',
    requireConfig: {'index': {'bootstrapData': {'foo': 'bar'}}}
  });
});

app.use(express.static(__dirname + '/public'));
app.listen(3001);
