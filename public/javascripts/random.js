var socket = io.connect();

socket.on("pathImg", function(pytanko){
   $('#question').append('<img src=/images/'+pytanko+, alt="pytanie" />');
});