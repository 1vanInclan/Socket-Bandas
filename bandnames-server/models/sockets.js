const Bandlist = require("./band-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.bandList = new Bandlist();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log("cliente conectado");

            // Emitir al cliente conectado todas las bandas actuales
            socket.emit('current-bands', this.bandList.getBands() );

            // Votar por la banda
            socket.on('votar-banda', (id) => {
                this.bandList.increaseVotes(id);
                this.io.emit('current-bands', this.bandList.getBands() );
            })

            // Borrar banda
            socket.on('borrar-banda', (id) => {
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands() );
            })

            // Cambiar nombre banda
            socket.on('cambiar-nombre-banda', ({id, nombre}) => {
                this.bandList.changeNeme(id, nombre);
                this.io.emit('current-bands', this.bandList.getBands() );
            })

            // Crear banda
            socket.on('crear-banda', ({nombre}) => {
                // console.log(nombre)
                this.bandList.addBand(nombre);
                this.io.emit('current-bands', this.bandList.getBands() );
            })
        
        });
    }


}


module.exports = Sockets;