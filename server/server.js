const app = require('express')()
const data = require('./db.json')

const port = 4000

app.get('/api', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}...`)
})