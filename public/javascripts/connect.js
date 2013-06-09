var socket = io.connect();

$(document).ready(function(){
	socket.on('connect', function(){
		$('#loginForm').submit(function(){
			var username = $('input[id=username]').val();
			socket.emit('addUser', {
				username: username
			});
		});
	});

	socket.on('updateList', function(data){
		$('#usersList').empty();
		data.forEach(function(el){
			$('#usersList').append('<p>' + el + '</p><br />');
		});
	});
});