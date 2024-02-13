
// bepaal alle hexidecimalen die een kleurecode kan hebben
const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// haal hexcharachters op
function getCharacter(index) {
    return hexCharacters[index];
}

// bepaal met een random math 
function generateNewColor() {
    let hexColorRep;

    do {
        hexColorRep = "#";

        // Generate pastel colors by ensuring that the components are relatively close to each other
        const componentValue = Math.floor(Math.random() * 128) + 128; // Range: 128-255

        // Generate red component
        const redComponent = Math.floor(Math.random() * 64) + componentValue; // Range: componentValue to componentValue+64
        hexColorRep += redComponent.toString(16).padStart(2, '0');

        // Generate green component
        const greenComponent = Math.floor(Math.random() * 64) + componentValue; // Range: componentValue to componentValue+64
        hexColorRep += greenComponent.toString(16).padStart(2, '0');

        // Generate blue component
        const blueComponent = Math.floor(Math.random() * 64) + componentValue; // Range: componentValue to componentValue+64
        hexColorRep += blueComponent.toString(16).padStart(2, '0');
    } while (hexColorRep === '#ffffff' || hexColorRep === '#000000');

    return hexColorRep;
}

function cardcolor() {
    // haal de class card op
    const cardElements = document.querySelectorAll(".card");
    // voor elke card, genereer een ander background
    cardElements.forEach(function(card) {
        card.style.background = generateNewColor();
    });
}

// haal de cardcolor op
cardcolor();