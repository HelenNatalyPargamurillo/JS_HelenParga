class  vehiculo {
     constructor (marca,modelo,año){
        this.marca=marca;
        this.modelo=modelo;
        this.año=año;
     }
     detalles(){
        console.log(`marca:${this.marca},mode:${this.modelo},año ${this.año}`);
    }
}

class coche extends vehiculo{
    constructor(marca,modelo,año,npuertas){
        super(marca,modelo,año);
        this.npuertas=npuertas;
    }
    detalles(){
        console.log(`marca:${this.marca},mode:${this.modelo},año: ${this.año},numero de puertas: ${this.npuertas}`);
    }
}
const micoche = new coche("Volkswagen","Nuevo Polo",2023,4);
micoche.detalles();