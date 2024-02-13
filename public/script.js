// Bepaal alle hexadecimale kleurcodes die een kleur kan hebben
const colors = ["9DE5A4", "FFBABA", "3D5E85", "EE9DF0", "656262", "ECEE89", "A2FAE5", "272222", "FB8888", "B7FF95", "E385CF", "B4CCF0"];

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