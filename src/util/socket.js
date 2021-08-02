import {io} from 'socket.io-client';

// creating instance of socket.io pointing at our server
const URL = io('http://localhost:3333');
const socket = io(URL, { autoConnect: false});

// logging, can remove later
socket.onAny((e, ...args) => {
    console.log(e, args)
})

export default socket;