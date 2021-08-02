import {io} from 'socket.io-client';

// creating instance of socket.io pointing at our server
const URL = 'http://localhost:3333';
const socket = io(URL, { autoConnect: false});

export default socket;