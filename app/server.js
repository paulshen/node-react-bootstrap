var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
app.set('views', process.cwd() + '/app/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

function getJsPath(path) {
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:8090/js/' + path;
  }
  return '/js/' + path;
}

app.get('/', function(req, res) {
  res.render('index', {
    jsMain: getJsPath('index.bundle.js'),
    jsBootstrap: {'index': {'foo': 'bar'}}
  });
});

app.use(express.static(__dirname + '/public'));
app.listen(3001);
