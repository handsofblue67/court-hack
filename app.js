var express = require('express');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var MongoClient = require('mongodb').MongoClient;
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config.json');

var mongoPath = ["mongodb://", config.mongo.host, ":", config.mongo.port, "/ror"].join('')

MongoClient.connect(mongoPath, function(err, db){
    if (err) { return console.dir(err); }

    console.log('connected to mongo');
    
    db.createCollection('requests', function(err, collection) {('collection created')});
});

var routes = require('./routes/index');
var users = require('./routes/users');

passport.use(new FacebookStrategy({
        clientID: config.facebook.clientID,
        clientSecret: config.facebook.clientSecret,
        callbackURL: "http://localhost:3000/api/login/facebook/return"
    },
    function(accessToken, refreshToken, profile, cb) {
            console.log(profile);
            return cb(null, profile);
    }
));


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var router  = express.Router()

router.get('/app/*', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname + '/public/'
  });
});

router.get('/app', function(req, res) {
  res.redirect('/app/')
})

router.get('/', function(req, res) {
  res.redirect('/app/')
})


app.use(router)

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;


