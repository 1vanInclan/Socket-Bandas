const Band = require("./band");


class Bandlist {

    constructor() {
        this.bands = [
            new Band('Metallica'),
            new Band('Heroes del silencio'),
            new Band('Bon jovi'),
            new Band('Muse')
        ];
    }

    addBand( name ) {
        const newBand = new Band(name);
        this.bands.push( newBand );
        return this.bands;
    }

    removeBand( id ) {
        this.bands = this.bands.filter( band => band.id !== id );
    }

    getBands() {
        return this.bands;
    }

    increaseVotes( id ) {
        this.bands = this.bands.map( band => {

            if ( band.id == id) {
                band.votes += 1;
            }

            return band;

        })
    }

    changeNeme( id, newName ) {
        this.bands = this.bands.map( band => {

            if ( band.id == id) {
                band.name = newName;
            }

            return band;

        })
    }

}

module.exports = Bandlist;