var socket = io.connect();

socket.on("pathImg", function(pytanko){
   $('#pytanko').append('<img src=/images/'+pytanko+'.jpg ', alt="pytanie" >');
});