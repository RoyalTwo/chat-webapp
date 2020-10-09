const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "162.237.71.9",
  user: "remoteroot",
  password: "remotepass"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// html for page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main/home-doc.html');
});

// user connection
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on("userinfo", (infObj) => {

    })
});

// display message to all on server
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

// initialize site
server.listen(8080, () => {
    console.log('listening on *:8080');
});

/*

infObj = {

    uname: Admin,
    pass: P4$$wd432,
    token: <16CharValue>,

}


*/