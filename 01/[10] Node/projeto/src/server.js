const port = 3003

const express = require('express')
const app = express()

const db = require('./bancoDeDados')

// get: forma de requisição
app.get('/produtos', (req, res, next) =>{
    console.log('Middleware 1...')
    res.send(db.getProdutos)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id)) // id, parametro ta na requisicao


}) //:id na ulr vou digitar algo como /produtos/1
// traz produto especifico baseado no id

// app.get('/produtos', (req, res, next) =>{
//     res.send({ nome: 'Notebook', preco: 123.45 }) // convert in JSON automaticamente
// })

// app.use((req, res, next) =>{
//     res.send({ nome: 'Notebook', preco: 123.45 }) 
// }) // use => vai ser atendido para todas as requisicoes, sem precisar de uma url especifica


app.post('./produtos', (req, res, next) =>{
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // vai converter automaticamente em JSON
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})