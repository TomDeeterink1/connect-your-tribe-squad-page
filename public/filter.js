
// Import the entire contents of script.js
import * as script from '/script.js';

function filter() {
    const selector = document.querySelectorAll(".filters");
    const apiUrl = 'https://fdnd.directus.app/items'

    if (selector == "Name") {
        // Maak een GET route voor de index
        app.get('/', function (request, response) {
            // Haal alle personen uit de FDND API op
            fetchJson(apiUrl + '/person/?filter={"squad_id":3}&sort=name').then((data) => {
            // Render index.ejs uit de views map en geef uit FDND API opgehaalde data mee
            response.render('index', data)
    })
  })
    } else {
        app.get('/', function (request, response) {
            // Haal alle personen uit de FDND API op
            fetchJson(apiUrl + '/person/?filter={"squad_id":3}').then((data) => {
            // Render index.ejs uit de views map en geef uit FDND API opgehaalde data mee
            response.render('index', data)
    })
  })
    }


}