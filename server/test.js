const axios = require('axios')

axios.get('http://localhost:4000/api')
    .then(res => res.data)
    .then(data => console.log(data))