import {io} from 'socket.io-client';

// creating instance of socket.io pointing at our server
const URL = "https://backend-for-bad-messenger.herokuapp.com";
const socket = io(URL, { autoConnect: false});

socket.on("connect", () => {
    const username = socket.auth.username;
    const message = `${username} has connected.`
    socket.emit("send-admin-message", {adminMessage: true, message: message})
})
socket.on("disconnect", () => {
    const username = socket.auth.username
    const message = `${username} left the chat.`
    socket.emit("send-admin-message", {adminMessage: true, message: message})
})

export {
    socket
}