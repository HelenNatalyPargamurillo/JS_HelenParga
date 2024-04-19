class rectangulo {
    constructor(ancho, alto){
        this.ancho=ancho;
        this.alto= alto;
    }
    calcularArea(){
        return this.ancho * this.alto;
    }

    calcularPerimetro(){
        return 2 * (this.ancho + this.alto);
    }
    
}
 const mirectangulo = new rectangulo (4,8);

 const area =mirectangulo.calcularArea();
 const Perimetro = mirectangulo.calcularPerimetro();

 console.log(`Area del rectangulo: ${area}`);
 console.log(`Perimetro del rectangulo: ${Perimetro}`);
