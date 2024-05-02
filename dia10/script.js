function fetchCards(){
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=5`; // Solicitar dibujar 8 cartas del mazo nuevo
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayOriginalCards(response.cards);
        } else if(this.readyState === 4){
            console.log("Error:", this.statusText);
        }
    };
    xhr.send();
}
// Limpiar  contenedor 
function displayOriginalCards(cards){
    let aca = document.getElementById("caja");
    aca.innerHTML = ''; 
    for (let i = 0; i < cards.length; i++) {
        displayCard(cards[i]); 
    }
}

function displayCard(card){
    let containerCard= document.getElementById("aca");
    let CardElement = document.createElement("img");
    CardElement.src = card.image; 
    containerCard.appendChild(CardElement); 
}
function fetchCards() {
    let xhr = new XMLHttpRequest();
    let url = `https://deckofcardsapi.com/api/deck/new/draw/?count=8`; // Solicitar dibujar 8 cartas del mazo nuevo
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);
            // Duplicar las cartas obtenidas
            let cardsOriginal = response.cards;
            let cardsDupli = JSON.parse(JSON.stringify(response.cards));
            let finalCards = cardsOriginal.concat(cardsDupli); // Concatenar el array original con su duplicado
            console.log(finalCards); // Verificar las cartas duplicadas
            displayCards(finalCards); // Mostrar las cartas duplicadas
        } else if (this.readyState === 4) {
            console.log("Error:", this.statusText);
        }
    };
    xhr.send();
}

function displayCards(cards) {
    let aca = document.getElementById("aca");
    aca.innerHTML = ''; // Limpiar el contenedor de cartas antes de agregar las nuevas cartas
    for (let i = 0; i < cards.length; i++) {
        displayCard(cards[i]); // Mostrar cada carta
    }
}

function displayCard(card) {
    let aca = document.getElementById("aca");
    let cardElement = document.createElement("img");
    cardElement.src = card.image; // Establecer la imagen de la carta
    aca.appendChild(cardElement); // Agregar la carta al contenedor

}
document.addEventListener("DOMContentLoaded", function() {
    fetchCards(); // Llama a la función fetchCards() cuando la página se carga
});








document.getElementById("boton").addEventListener("click", fetchCards);

document.addEventListener("DOMContentLoaded", function() {
    duplicateCards();
});

function duplicateCards() {
    let cartaOriginal = document.querySelector('.carta'); // Obtiene la carta que quieres multiplicar
    let container = document.querySelector('.container'); // Obtiene el contenedor

    // Crea varias copias de la carta y las añade al contenedor
    for (let i = 0; i < 16; i++) { // Por ejemplo, se crearán 3 copias adicionales
        let cartaDuplicada = cartaOriginal.cloneNode(true); // Clona la carta original
        container.appendChild(cartaDuplicada); // Agrega la carta duplicada al contenedor
    }
}
document.addEventListener("DOMContentLoaded", function() {
    duplicateCards();
});

function duplicateCards() {
    let cartaOriginal = document.querySelector('.carta'); // Obtener la carta que quieres multiplicar
    let container = document.querySelector('.container'); // Obtener el contenedor

    // Array de posiciones para las copias de la carta
    let positions = [
        { top: '31%', left: '40.1%' },
        { top: '31%', left: '31%' },
        { top: '31%', left: '22%' },
        { top: '31%', left: '58.8%'},
        { top: '31%', left: '68%' },
        { top: '6.5%', left: '68%' },
        { top: '6.5%', left: '58.9%' },
        { top: '6.5%', left: '40.5%' },
        { top: '6.5%', left: '49.8%' },
        { top: '6.5%', left: '3.4%' },
        { top: '6.5%', left: '12.7%' },
        { top: '6.5%', left: '22%' },
        { top: '6.5%', left: '31.2%' },
        { top: '6.5%', left: '77.3%' },
        { top: '6.5%', left: '86.6%' },
        
        // Puedes agregar más objetos para más posiciones
    ];

    // Crear y posicionar cada copia de la carta
    for (let i = 0; i < positions.length; i++) {
        let cartaDuplicada = cartaOriginal.cloneNode(true); // Clonar la carta original
        // Establecer las posiciones de la copia de la carta
        cartaDuplicada.style.position = 'absolute';
        cartaDuplicada.style.top = positions[i].top;
        cartaDuplicada.style.left = positions[i].left;
        container.appendChild(cartaDuplicada); // Agregar la copia de la carta al contenedor
    }
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("carta2").addEventListener("click", toggleVisibility);
});

function toggleVisibility() {
    let carta2 = document.getElementById("carta2");
    let img = document.querySelector('.img');
    

    // Verifica si la carta 2 está visible
    if (carta2.style.visibility !== "hidden") {
        carta2.style.visibility = "hidden"; // Oculta la carta 2
        img.style.visibility = "visible"; // Muestra la carta 1
    } else {
        carta2.style.visibility = "visible"; // Muestra la carta 2
        img.style.visibility = "hidden"; // Oculta la carta 1
    }
    
}
