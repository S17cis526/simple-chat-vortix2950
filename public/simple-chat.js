var socket=io();
socket.io('welcome',function (data){// you listen to the request you created.
  $('<li>').text(text).appendTo('message-log');
  //alert(data.message)

});
socket.on('message',function(data){
var li=$('<li>')

.text(message.text)
.css('color',message.color)
.appendTo('#message-log');
$('<strong>')
.text(message.text)
.appendTo(li);
//.css('pading-right','1rem');

});


$('#chat-end').on('click',function(){
  var text=$('#chat-text').val()
  socket.emit('message',text);
$('#chat-text').val('');
});

$('#color').on()
