var express = require('express');
var router = express.Router();

var app = express();
var morgan = require('morgan');
app.use(morgan('dev'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
