// npm i --save express@4.16.3 body-parser@1.18.2 -E

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// body parse vai fazer um parse no corpo do requet,  pegar os dados e jogar dentro do request.body
// ou seja: quando acessar request.body, tem acesso a todos os dados do form
// sem bodyParse: undefined

app.use(bodyParser.urlencoded( { extended: true } ))

app.post('/usuarios', (req, res ) => { // usuario, funcao middleware
    console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.listen(3003)

// node server.js
// escutando...