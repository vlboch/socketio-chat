const socket = io('http://localhost');
console.log(socket)
socket.on('news', (data) => {
    console.log(data);
});

socket.on('broadcast', (data) => {
    console.log(`${data.userID} just joined the room!!!`)
})
