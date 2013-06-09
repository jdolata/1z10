exports.login = function(io, socket, data){
	data.users.push(data.username);
	io.on('connection', function(socket){
		socket.emit('updateList', data.users);
	});
};