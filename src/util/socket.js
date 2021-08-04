import {io} from 'socket.io-client';

// creating instance of socket.io pointing at our server
const URL = 'http://localhost:3333';
const socket = io(URL, { autoConnect: false});

socket.on("connect", () => {
    const username = socket.auth.username;
    console.log(`Connected as ${username}`)
})
socket.on("disconnect", () => {
    console.log("disconnected successfully")
})

class SocketImpl {
    constructor(){
        this.sendMessage = (message) => {
            socket.emit("send-message", message)
        }
    }
}

const Socket = new SocketImpl()

export {
    socket
}