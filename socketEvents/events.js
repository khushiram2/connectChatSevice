import { Server } from "socket.io";


function startevent(server) {
  const io=new Server(server,{
    pingTimeout:60000,
    cors:{
      origin:"*"
    }
  })

  io.on("connection",(socket)=>{
    console.log(socket.id)
    socket.on("setup",(userData)=>{
      console.log(userData)
      socket.join(userData.id)
      socket.emit("connected")
    })


    socket.on("join-chat",(room)=>{
      socket.join(room)
      console.log("user joined room no. "+room)
    })
    socket.on("typing",(room)=>{
      socket.to(room).emit("typing")
    })

    socket.on("stoptyping",(room)=>{
      console.log("stopped typing")
      socket.to(room).emit("stoptyping")
    })

    socket.on("send-message",(newMessage)=>{
      const parsedmessage=JSON.parse(newMessage)
      const chat=parsedmessage.chatId
      if(!chatId.user1 || !chatId.user2) return console.log("users not defined");   
      if (!io.sockets.adapter.rooms.has(chatId._id)) {
        return console.log("Send notification to recipient " + chatId._id);
      }
      socket.in(chat._id).emit("message-recieved",parsedmessage)    

    })

    socket.on("user-disconnected",(room)=>{
      console.log("user disconnected from" + room)
      socket.leave(room)
    })


    socket.on('logout', () => {
      console.log('User logged out');
      socket.disconnect();
    });
    socket.on("disconnect",()=>{
      console.log("user disconencted")
    })
  })
  io.on('error', (error) => {
    console.error('Socket.IO Error:', error);
  })
}

export default startevent;
