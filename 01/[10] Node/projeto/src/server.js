const port = 3003

const express = require('express')
const app = express()

// get: forma de requisição
app.get('/produtos', (req, res, next) =>{
    console.log('Middleware 1...')
    next()
})

// app.get('/produtos', (req, res, next) =>{
//     res.send({ nome: 'Notebook', preco: 123.45 }) // convert in JSON automaticamente
// })

app.use((req, res, next) =>{
    res.send({ nome: 'Notebook', preco: 123.45 }) 
}) // use => vai ser atendido para todas as requisicoes, sem precisar de uma url especifica

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})