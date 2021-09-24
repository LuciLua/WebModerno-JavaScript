const port = 3003

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const db = require('./bancoDeDados')


app.use(bodyParser.urlencoded({ extended: true })) // para qualquer requisição que eu faça no meu servidor usando express, ele vai obrigatoriamente passar por esse middleware

// e se no corpo da requisição tiver esse padrão (urlencoded), quando chegar na aplicacao
// ele vai aplicar esse middleware que vai fazer um parse que vai transformar
// isso em objeto 

// use => para todas as requisições, dispare isto
// urlencoded => transforma corpo da requisicao em objeto


// GET: forma de requisição
app.get('/produtos', (req, res, next) =>{
    console.log('Middleware 1...')
    res.send(db.getProdutos())
})

// GET (client receber algum dado)
app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id)) // id, parametro ta na requisicao


}) //:id na ulr vou digitar algo como /produtos/1
// traz produto especifico baseado no id

// GET
// app.get('/produtos', (req, res, next) =>{
//     res.send({ nome: 'Notebook', preco: 123.45 }) // convert in JSON automaticamente
// })

// USE
// app.use((req, res, next) =>{
//     res.send({ nome: 'Notebook', preco: 123.45 }) 
// }) // use => vai ser atendido para todas as requisicoes, sem precisar de uma url especifica


// POST (inserir algum dado)
app.post('/produtos', (req, res, next) =>{
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai converter automaticamente em JSON
})


// PUT (atualizar)
app.put('/produtos/:id', (req, res, next) =>{
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai converter automaticamente em JSON
})

// DELETE (deletar)
app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.deleteProduto(req.params.id)
    res.send(produto) // vai converter automaticamente em JSON
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})