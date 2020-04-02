module.exports = function Route(app, server){

	var io = require('socket.io').listen(server) 

	app.get('/', function(request, response) {
		response.render("index");
	})
	io.sockets.on('connection', function (socket){
		console.log('incoming socket connection');

		socket.on("colorPicked", function(color){
			colorPick = color;
			io.emit('choice', color);
		});
	
	});
};