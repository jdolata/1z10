/*jshint node: true */
var express = require('express');
var http = require('http');
var path = require('path');
var url = require('url');
var routes = require('./routes'); 
var session = require('./controllers/usercontroller');
var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('user', {
    username: 'Andrzej'
  });
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({
  	secret:'xxx',
  	cookie:{
  		maxAge:36000
  	}
  }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler());
});


app.post('/', function (req, res){
  console.log(req.body.username);
  req.session.user = req.session.user || req.app.get('user');
  req.session.user.username = req.body.username;
  res.redirect('/main');
});
app.get('/', routes.index);
app.get('/main', routes.main);

  	// Create server
var server = http.createServer(app).listen(app.get('port'), function () {
  console.log("Serwer nasłuchuje na porcie " + app.get('port'));
});

var users = [];

var io=require('socket.io').listen(server);
io.on('connection', function(socket){
 	socket.on('addUser', function(data){
    data.users = users; 
 	  console.log('APP: ' + data.username);
    session.login(io, socket, data);
  });
});