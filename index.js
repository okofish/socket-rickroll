var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/run', function(req, res){
  res.sendFile(__dirname + '/run.html');
});

app.get('/roll.mp4', function(req, res){
  res.sendFile(__dirname + '/roll.mp4');
});

io.on('connection', function(socket){
  socket.on('roll', function(){
    io.emit('roll');
  });
  socket.on('pause', function(){
    io.emit('pause');
  });
  socket.on('unpause', function(){
    io.emit('unpause');
  });
  socket.on('end', function(){
	console.info('show ended!');
    io.emit('end');
  });
  socket.on('refresh', function(){
	console.info('page refreshed!');
    io.emit('refresh');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
