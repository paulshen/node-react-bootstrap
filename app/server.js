var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
app.set('views', process.cwd() + '/app/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', function(req, res) {
  res.render('index', {
    jsMain: 'js/package.js',
    jsBootstrap: {'index': {'foo': 'bar'}}
  });
});

app.use(express.static(__dirname + '/public'));
app.listen(3001);
