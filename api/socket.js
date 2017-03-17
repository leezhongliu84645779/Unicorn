var socket_arr = [];
module.exports = function(app, iosocket){
  iosocket.on('connection', function(socket){
  	socket_arr.push(socket);
    console.log(socket_arr.length);
    console.log("user(s) is connected");
    socket.on('send message', function(data){
  		console.log(data);
  		iosocket.emit('new message', {message: data});
  	});
  });
}