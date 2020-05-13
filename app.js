const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 4000);
// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {  
    io.emit("userJoined", { userID: socket.id, time: new Date() });

    socket.on("newTextMessage", (userID, msg) => {
      io.emit("newTextMessage",
      { text: msg, 
        from: userID, 
        date: new Date().toTimeString()
      });
    })
});

