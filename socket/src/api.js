import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');

//'Send Message' is connected to server io.on needs to be identical
export const sendMessage = (msg) =>{
    socket.emit('Send Message', msg)
}