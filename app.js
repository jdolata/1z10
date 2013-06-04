/*jshint node: true */
'use strict';
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
//var serverGameLogic = require('./Public/Scripts/script');

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.favicon());
   // app.use(express.logger());

    app.use(express.static(path.join(__dirname, 'Public')));
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/Public/index.html');
});

app.get('/zasady', function (req, res) {
    res.sendfile(__dirname + '/Public/rules.html');
});

app.get('/congratulations', function (req, res) {
    res.sendfile(__dirname + '/Public/congratulations.html');
});

var server = http.createServer(app).listen(app.get('port'));

var io = require('socket.io');
var socket = io.listen(server);
socket.set('log level', 1);
