exports.login = function(io, socket, data){
	data.users.push(data.username);
	io.on('connection', function(socket){
		io.sockets.emit('updateList', data.users);
	});
};

exports.getQuestion = function(io, socket, data){
	//data.questions[0] = 0;
	var x=Math.floor((Math.random()*10));
	pytanko = "/images/img0"+x+".jpg";
	//console.log('dlugosc:', questions.lenght());
	for (var i = 0; i <= data.questions.lenght; i++) {
		if (pytanko == data.questions[i]) {
			console.log('PYTANKO:', pytanko);
			//console.log('data.questions[i]:' data.questions[i]);
			getQuestion(io, socket, data);
		};
		data.questions.push(pytanko);
		console.log('CONTROLLER PATH: ' + pytanko);
	};
	io.sockets.emit('sendQuestion', {
		username: data.username,
		path : pytanko
	});
};