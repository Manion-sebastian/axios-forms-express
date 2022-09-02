const express = require('express')

const app = express()

const PORT = 3000
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('welcome to the star wars search engine')

})

app.get('/search', (req, res) => {
    // take in form data
    // make an http request to the swapi
    // render the data to the user.
})

app.listen(PORT, () => {
    console.log('yo')
})