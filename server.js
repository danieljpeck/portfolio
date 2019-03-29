var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var router = express.Router();

app.use(express.static('assets/css'));
app.use(express.static('assets/images'));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8888);