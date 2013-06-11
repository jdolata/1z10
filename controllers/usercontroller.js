exports.login = function(io, socket, data){
	data.users.push(data.username);
	io.on('connection', function(socket){
		io.sockets.emit('updateList', data.users);
	});
};

exports.getQuestion = function(io, socket, data){
	var x=Math.floor((Math.random()*10));
	console.log(data.questions);
	pytanko = "/images/img0"+x+".jpg";
	for (var i = 0; i < data.questions.length; i++) {
		console.log(data.questions[i], pytanko);
		if (pytanko === data.questions[i]) {
				exports.getQuestion(io, socket, data);
				return;
		};

	};
	data.questions.push(pytanko);
	console.log('///// DLUGOSC TABLICY :' + data.questions.length);
	io.sockets.emit('sendQuestion', {
		username: data.username,
		path : pytanko
	});
};

exports.sendAnswer = function(io, socket, data){

};