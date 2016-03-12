var Socket = require('socket.io');
module.exports=function(server){
  var io = Socket(server)
  io.on('connection', function(socket){
    console.log('Now entering the chat room');
  })
}
