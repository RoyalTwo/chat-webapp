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
  console.log("SQL Connected.");
});
con.query("SELECT * FROM LoginInfo", function(err, result) {
  console.log(result);
});

app.use(require("express").static("messages"));
app.use(require("express").static("login"));

// html for page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login/login-doc.html');
});
app.get('/', (req, res) => {
  res.redirect('/login');
});
app.get('/messages', (req, res) => {
    res.sendFile(__dirname + '/messages/messages-doc.html');
});
app.post('/login', (req, res) => {
  res.redirect('/messages');
});

app.post('/', (req, res) => {
  res.redirect('/messages');
});

app.post('/logininfo', (req, res) => {
});

// user connection
io.on('connection', (socket) => {
    console.log('User Connected.');
    socket.on("userinfo", (infObj) => {
        //temp function shut it
    })

    socket.on('sendMessage', function(data) {
		// we tell the client to execute 'new message'
		socket.broadcast.emit('recieveMessage', {
			username: data.username,
			message: data.message
		});
	});
});

// initialize site
server.listen(3082, () => {
    console.log('listening on *:3082');
});
