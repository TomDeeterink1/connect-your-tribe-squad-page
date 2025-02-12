// Importeer het npm pakket express uit de node_modules map
import express from 'express'
// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'



// Stel het basis endpoint in
const apiUrl = 'https://fdnd.directus.app/items'

// Haal alle squads uit de WHOIS API op
const squadData = await fetchJson(apiUrl + '/person/?filter={"squad_id"}:3')

// Maak een nieuwe express app aan
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Stel ejs in als template engine
app.set('view engine', 'ejs')
// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een GET route voor de index
app.get('/', function (request, response) {
  // Haal alle personen uit de FDND API op
  fetchJson(apiUrl + '/person/?filter={"squad_id":3}&sort=name').then((data) => {
    // Render index.ejs uit de views map en geef uit FDND API opgehaalde data mee
    response.render('index', data)
  })
})

const messagess = [];

// Maak een GET route voor een detailpagina met een request parameter id
app.get('/detail/:id', function (request, response) {
  // Gebruik de request parameter id en haal de juiste persoon uit de WHOIS API op
  fetchJson('https://fdnd.directus.app/items/person/' + request.params.id).then((apiData) => {
    // Render detail.ejs uit de views map en geef de opgehaalde data mee als variable, genaamd person
    response.render('detail', {detail: apiData.data, squads: squadData.data, messages: messagess  } )
  })
})

// Maak een POST route voor de detail
app.post('/detail/:id', function (request, response) {
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  messagess.push(request.body.textbox)
  response.redirect(303, '/detail/' + request.params.id)

})
// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


