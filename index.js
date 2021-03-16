let express = require("express");
let socket = require("socket.io");
let app = express();
let server = app.listen(3000, () => {
  console.log("3000.port dinleniyor");
});

//Websocket using
let io = socket(server);
io.on("connection", (socket) => {
  //console.log("Socket bağlantısı oluşturuldu", socket.id);

  socket.on("chat", (data) => {
    //console.log(data);
    io.sockets.emit("chat2", data);
  });

  socket.on("writing", (data) => {
    socket.broadcast.emit("writing", data);
  });
  
});
app.use(express.static("public"));