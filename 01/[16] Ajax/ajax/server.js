const bodyParser = require('body-parser')
// deixar dados prontos para serem manipulados

const express = require('express')

const app = express()


// middleware
app.use(express.static('.')) // provê arquivos estaticos a partir da aplicaocao desse middleaware

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))

app.listen(8080, () => console.log('Executando...'))

// nao da pra rodar 2 processos na mesmas porta