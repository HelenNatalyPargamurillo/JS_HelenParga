// Definición de la clase Forma
class Forma {
    // Método para calcular el área (será anulado por las subclases)
    calcularArea() {
        console.log("Método calcularArea() de la clase Forma");
    }
}

// Subclase Círculo que hereda de Forma
class Circulo extends Forma {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    // Anula el método calcularArea() de la clase Forma para calcular el área de un círculo
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

// Subclase Triángulo que hereda de Forma
class Triangulo extends Forma {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    // Anula el método calcularArea() de la clase Forma para calcular el área de un triángulo
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

// Instanciación de la clase Circulo
const circulo = new Circulo(8);
console.log("Área del círculo:", circulo.calcularArea()); 

// Instanciación de la clase Triangulo
const triangulo = new Triangulo(8, 2);
console.log("Área del triángulo:", triangulo.calcularArea()); 
