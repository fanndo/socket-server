const express = require('express'); 
//servidor de sockets
const http = require('http') //.createServer(app);
const socketio = require('socket.io')
const path = require('path');
const cors = require('cors');

const Sockets = require('./sockets');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //http:server
        this.server = http.createServer( this.app );

        //configuracion socket

        this.io = socketio( this.server, { /** config  */} );
    }
    middlewares(){
        //desplegar directorio publico
        this.app.use( express.static( path.resolve( __dirname, '../public' )));

        //CORS 
        this.app.use( cors() )
    }
    configurarSocket(){
        new Sockets(this.io);
    }
    execute(){
        
        //Inicializar middlewares
        this.middlewares();
        //Inicializar sockets
        this.configurarSocket();

        //Inicializar server
        this.server.listen(this.port,()=>{
            console.log(`server corriendo en puerto: ${ this.port }`);
        });
    }
}

module.exports = Server;