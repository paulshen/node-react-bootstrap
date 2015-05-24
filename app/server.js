var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
app.set('views', process.cwd() + '/app/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));

function getJsPath(path) {
  if (process.env.NODE_ENV !== 'production') {
    return 'http://localhost:8090/js/' + path;
  }
  return '/js/' + path;
}

app.get('*', function(req, res) {
  res.render('app', {
    jsMain: getJsPath('app.bundle.js'),
    jsBootstrap: {'index': {'foo': 'bar'}}
  });
});

app.listen(3001);
