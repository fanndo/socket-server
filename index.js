// const { static } = require('express');

const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();

//servidor de express
// const app = express();

//configuracion del socket server
// const io = require('socket.io')(server);



// io.on('connection', ( socket ) => {
//     console.log('cliente conectado...');

//     socket.on('mensaje-to-server', ( data ) =>{
//         console.log('server',data)
//         //socket.emit solo para el mismo 
//         io.emit('mensaje-from-server',data);
//     });
//     // socket.on('test',( data )=>{
//     //     console.log(data);

//     // })

//     // socket.emit('mensaje-bienvenida',{
//     //     msg: 'bienvenido al server',
//     //     fecha: new Date()
//     // });
// });
