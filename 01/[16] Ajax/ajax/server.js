const bodyParser = require('body-parser')
// deixar dados prontos para serem manipulados

const express = require('express')

const app = express()


// middleware
app.use(express.static('.')) // provê arquivos estaticos a partir da aplicaocao desse middleaware

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.get('/teste', (req, res) => res.send('Ok'))

const multer = require('multer')

// funcao diskStorage qu recebe um objeto que vai configurar a
// pasta onde vou salvar os arquivos, e o nome do arquivo no momento de salvar ele

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo') // nome do (campo)input q vai vim na requisicao

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro')
        }
        res.end('Concluido com sucesso!')
    })
})

// aqui vai precisar do body-parser
app.post('/formulario', (req,res) => {
    res.send({
        ...req.body, // tudo que veio no body (la no axios.post)
        id: 6, // mais o id
        luciteste: 'olaluci'
    })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0

    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))

// nao da pra rodar 2 processos na mesmas porta