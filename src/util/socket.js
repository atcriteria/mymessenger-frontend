import {io} from 'socket.io-client';

// creating instance of socket.io pointing at our server
const URL = 'http://localhost:3333';
const socket = io(URL, { autoConnect: false});

socket.on("connect", () => {
    const username = socket.auth.username;
    const message = `${username} has connected.`
    socket.emit("send-admin-message", {adminMessage: true, message: message})
    console.log(username)
})
socket.on("disconnect", () => {
    const username = socket.auth.username
    const message = `${username} left the chat.`
    socket.emit("send-admin-message", {adminMessage: true, message: message})
    console.log(username)
})

export {
    socket
}