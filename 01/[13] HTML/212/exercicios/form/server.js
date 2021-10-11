const fs = require('fs')

// npm i --save express@4.16.3 body-parser@1.18.2 -E

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// body parse vai fazer um parse no corpo do requet,  pegar os dados e jogar dentro do request.body
// ou seja: quando acessar request.body, tem acesso a todos os dados do form
// sem bodyParse: undefined

app.use(bodyParser.urlencoded( { extended: true } ))

app.post('/usuarios', (req, res ) => { // usuario, funcao middleware, opcional: next
    console.log(req.body)

    fs.writeFileSync('./arquivo.json', JSON.stringify(req.body), err => {
        // se caso de erro
        console.log(err || 'Arquivo salvo!')
    })   

    res.send('<h1>Parabéns. Usuário Incluido</h1>' )

})

// preferir POST em formularios
// GET aparec senha no parametro da URL: erro!!!


app.post('/usuarios/:id', (req, res ) => { // usuario, funcao middleware,  opcional: next
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns. Usuário Alterado</h1>')
})

app.listen(3003)

// node server.js
// escutando...