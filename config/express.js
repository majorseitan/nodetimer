var session = require('express-session'),
  mongoStore = require('connect-mongo')(session),
  flash = require('connect-flash'),
  viewHelpers = require('./middlewares/view');


module.exports = function (app, config, passport) {
  var public = config.root + '/public';
  var express = require('express');
  app.use(require('stylus').middleware(public));

  app.use(express.static(public));
  var logger = require('express-logger');
  app.use(logger({ path : '/tmp/nodetimer.log' }));

  // set views path, template engine and default layout
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');
  //console.log(Object.getOwnPropertyNames(app));
  // dynamic helpers
  app.use(viewHelpers(config));

  // cookieParser should be above session
  var cookieParser = require('cookie-parser');
  app.use(cookieParser());

  // bodyParser should be above methodOverride
  var bodyParser = require('body-parser');
  app.use(bodyParser());
  var methodOverride = require ('method-override');
  app.use(methodOverride());
  var compression = require('compression');
  app.use(compression());

  // express/mongo session storage
  app.use(session({
    secret: 'node-timer-alexkroman',
      cookie: {
        maxAge: 14 * 24 * 3600000
      },
    store: new mongoStore({
      url: config.db,
      collection : 'sessions'
      })
  }));

  // connect flash for flash messages
  app.use(flash());

    // use passport session
  app.use(passport.initialize());
  app.use(passport.session());

  var favicon = require('serve-favicon');
  app.use(favicon(public + "/img/" + 'favicon.ico'));

};