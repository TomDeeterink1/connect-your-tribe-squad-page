// Bepaal alle hexadecimale kleurcodes die een kleur kan hebben
const colors = ["F4F1E6", "F4F1E6", "F8D351", "F4F1E6", "EFA73A", "E6473D", "45BDF1"];

// Haal een willekeurige kleur op uit de array
function generateNewColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return '#' + colors[randomIndex];
}

function cardcolor() {
    // Haal de elementen met de class "card" op
    const cardElements = document.querySelectorAll(".card");
    // Voor elke kaart, genereer een andere achtergrondkleur
    cardElements.forEach(function(card) {
        card.style.background = generateNewColor();
    });
}

// haal de cardcolor op
cardcolor();


