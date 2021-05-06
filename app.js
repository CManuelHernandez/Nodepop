var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');

var app = express();

// Conection to the BBDD on Mongose
const mongooseConnection = require('./lib/connectMongose');

require('./models/Ad');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const loginController = require('./routes/loginController');
const jwtAuth = require('./lib/jwtAuth');

// middleware para subir image

const multerStorage = multer.diskStorage({
  destination: 'public/images/ads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

app.use(multer({
  storage: multerStorage,
  dest: './public/images/ads',
  limits: {fileSize: 1000000},
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: the file must be a valid image");
  }
}).single('image'));

/**
 * Rutas del API
 */
// app.use('/api/ads', require('./routes/api/ads')); // Desactivar el requisito de JWT par obtener el listado de anuncios
app.use('/api/ads', jwtAuth(), require('./routes/api/ads'));
app.use('/api/authenticate', loginController.postJWT);

/**
 * Setup de i18n
 */
 const i18n = require('./lib/i18nConfigure');
 app.use(i18n.init);


/**
 * Rutas de mi Website
 */
app.use('/', require('./routes/index'));
app.use('/ads', require('./routes/index'));
app.use('/change-locale', require('./routes/change-locale'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  if(err.array){
    err.status = 422;
    const infoError = err.array({onlyFirstError:true})[0];
    err.message = isApi(req) ? 
      {message: 'Not valid ',errores:err.mapped()}:
      `Not valid - ${infoError.param} ${infoError.msg}`
  }
  res.status(err.status || 500);
  if(isApi(req)){
    res.json({success:false,error:err.message});
    return;
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.render('error');
});

function isApi(req){
     return req.originalUrl.indexOf('apiv')!==0;
  }

module.exports = app;
