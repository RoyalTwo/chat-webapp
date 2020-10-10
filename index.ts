const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "162.237.71.9",
  user: "remoteroot",
  password: "remotepass",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
/*con.query("SELECT * FROM LoginInfo", function (err, result) {
  if (err) throw err;
  console.log(result);
});*/

app.use(require("express").static("messages"));

// html for page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/messages/messages-doc.html');
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
server.listen(3082, () => {
    console.log('listening on *:3082');
});
