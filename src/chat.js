const path = require("path")
const publicDir = path.join(__dirname,"../public");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const http = require("http");
const server = http.createServer(app)
const socketio = require("socket.io")
const io = socketio(server)

app.use(express.static(publicDir))

io.on("connection",(socket)=>{
    console.log("New connection with WebSocket")
    socket.emit("message","Welcome")
})

server.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})