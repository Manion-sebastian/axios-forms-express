// https://swapi.dev/api/people

const axios = require('axios')

const url = 'https://swapi.dev/api/people'

axios.get(url)
    // axios returns a promise that is dot thennable
    .then(response => {
        console.log(response)
    })
    .catch(console.warn)