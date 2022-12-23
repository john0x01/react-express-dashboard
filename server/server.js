const app = require('express')()
const cors = require('cors')
const data = require('./db.json')

app.use(cors())

const port = 4000

app.get('/api', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}...`)
})

