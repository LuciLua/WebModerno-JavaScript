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


app.listen(8080, () => console.log('Executando...'))

// nao da pra rodar 2 processos na mesmas porta