class persona {
    constructor(nombre,edad,pais){
        this.nombre= nombre;
        this.edad = edad;
        this.pais = pais;
    }
detalle(){
    console.log(`nombre:${this.nombre},edad ${this.edad}.pais ${this.pais}`);
}
}
const persona1= new persona("Carlos",25,"Mexico");
const persona2= new persona("Luisa",15,"Argentina");

persona1.detalle();
persona2.detalle();
