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

	$(document).on('click','#getQuestion', function(){
		socket.emit('getQuestion', {
		});
	});

	socket.on('sendQuestion', function(data){
		$('#question').empty();
		$('#question').append("<img src="+data.path+" alt='pytanie' />");
	});

	$(document).on('click','#sendAnswer', function(){
			var username =$('#userpanel').text();
			var czas = getTime();
			console.log(username);
			socket.emit('setAnswer', {
				username: username,
				time: time
			});
	});

	$(document).on('click','#goodAnswer', function(){
		
	});

	$(document).on('click','#badAnswer', function(){
		
	});
});


