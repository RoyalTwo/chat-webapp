$(document).ready(function() {
    var socket = io();
    socket.on('chat message', function(msg){
      console.log("TEST");
      $('.messages').append('<div class=outMessage><span class="content">' + msg + '</span><div>');
    });
    $('#submitBtn').click(function() {
      $('#m').val(function(e){
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
    });
  });
});