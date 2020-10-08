var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// html for page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// user connection
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// display message to all on server
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });

// initialize site
http.listen(3000, () => {
  console.log('listening on *:3000');
});