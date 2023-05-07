// const noteRoutes = require('./note_routes');

// module.exports = function(app, db) {
// 	noteRoutes(app,db);

// }

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API ---> (api/search?q=delhi&q2=jaipur&q3=15-april-2023) here,q=source,q2=destination,q3=date ' })
  })

app.get('/api/search', db.SearchbyValue)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})