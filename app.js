var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var postRouter = require('./routes/post');
var scanRouter = require('./routes/scan');
var confirmRouter = require('./routes/confirm');
var itemRouter = require('./routes/item');
var accountRouter = require('./routes/account');
var editRouter = require('./routes/edit');
var designRouter = require('./routes/design');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/post', postRouter);
app.use('/scan', scanRouter);
app.use('/confirm', confirmRouter);
app.use('/item', itemRouter);
app.use('/account', accountRouter);
app.use('/edit', editRouter);
app.use('/design', designRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
