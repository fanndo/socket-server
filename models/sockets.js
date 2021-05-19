class Sockets{
    constructor( io ){
        this.io = io;
        this.socketEvents();
    }
    socketEvents(){
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado...');
            //Escuchar evento : mensaje-to-server
            socket.on('mensaje-to-server', ( data ) =>{
                console.log('server',data)
                this.io.emit('mensaje-from-server',data);
            });
        });
    }

}

module.exports = Sockets;