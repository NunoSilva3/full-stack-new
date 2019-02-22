var createError       = require('http-errors'),
    express           = require('express'),
    path              = require('path'),
    cookieParser      = require('cookie-parser'),
    bodyParser        = require('body-parser'),
    logger            = require('morgan'),
    mongoose		      = require('mongoose'),
    indexRouter       = require('./routes/index'),
    usersRouter       = require('./routes/users'),
    postsRouter       = require('./routes/posts'),
    categoriesRouter  = require('./routes/categories'),
    commentsRouter    = require('./routes/comments'),
    imagesRouter      = require('./routes/images'),
    app               = express();
    mongoose.connect('mongodb://localhost/DBtoTestApp',()=>{
      console.log('Connected to DB')
    });
    var cors = require('cors') // to send request from different url


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// to enable cors for any requests
// app.use(cors())

//or enable it only for the specific url
app.options('*', cors())

// allowing requests from the front-end to our server with api calls
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

	next();
});
// cloudinary
cloudinary 				= require('cloudinary'),
cloudinaryConfig    	= require('./configs');
app.use('/images', imagesRouter)



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/categories', categoriesRouter);
app.use('/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
