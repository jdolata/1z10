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

	$(document).on('click', '#getQuestion', function(){
		var username = $('#userpanel').text();
		socket.emit('getQuestion', {
			username: username
		});
	});

	socket.on('sendQuestion', function(data){
		$('#question').empty();
		$('#question').append("<img src="+data.path+" alt='pytanie' />");
	});

	$(document).on('click','#sendAnswer', function(){
			var username = $('#userpanel').text();
			//var time = getTime();
			socket.emit('sendAnswer', {
				username: username
				//time: time
			});
	});

	/*socket.on('sendAnswer', function(data){
		$('#answer').empty();
		$('#answer').append("<textarea name="odpowiedź">Podaj odpowiedź</textarea>");
	});*/

	$(document).on('click','#goodAnswer', function(){
		
	});

	$(document).on('click','#badAnswer', function(){
		
	});
});

