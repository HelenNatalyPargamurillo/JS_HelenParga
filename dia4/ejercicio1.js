const persona = { 
    edad:23, color: "rojo" , id: 1001301103,
}

const carro = { 
    modelo:2002, color: "verde" , marca: "mazda",
}

const libro = { 
    genero:"novela", referencia: 578965 , titulo: "Entre ser y no ser yo soy",
}




var Animal = {
    type: "Invertebrates", // Valor predeterminado de las propiedades
    displayType: function () {
      // Método que mostrará el tipo de Animal
      console.log(this.type);
    },
  };
  
  // Crea un nuevo tipo de animal llamado animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Muestra: Invertebrates
  
// Crea un nuevo tipo de animal llamado Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Muestra: Fishes
