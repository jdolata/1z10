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
			//username: 'Ala'
		});
	});

	socket.on('sendQuestion', function(data){
		//alert(data.path);
		$('#question').empty();
		$('#question').append("<img src="+data.path+" alt='pytanie' />");
	});

	$(document).on('click','#getAnswer', function(){
			var czas = getTime();
			console.log(czas);
			socket.emit('getAnswer', {

			});
	});

	$(document).on('click','#goodAnswer', function(){
		
	});

	$(document).on('click','#badAnswer', function(){
		
	});
});
