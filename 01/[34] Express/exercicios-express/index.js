const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Importando module
const saudacao = require('./saudacaoMid')


// Module: Usuario


const usuario_API = require('./api/usuario')


app.post('/usuario', usuario_API.save)
app.get('/usuario', usuario_API.get)






// so será chamad se a url for /test
// app.use('/test', (req, res) => {
//     res.send("I'm fine")
// })

// aceita apenas  requisicoes tipo get
// app.get('/', (req, res) => {
//     res.send("I'm fine")
// })

// retorno dessa função chama função middleware (com o next)
app.use(saudacao("Luci"))

// Body parser
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Função Middleware: Função que recebe requisição, resposta e next()

// funciona mas nao chama a proxima
app.use('/opa', (req, res, next) => {
    console.log("Antes")
    next()
})

// http://localhost:3000/clientes/relatorio?completo=true&ano=2018
app.get('/clientes/relatorio', (req, res, next) => {

    res.send(`Cliente relatorio: Completo = ${req.query.completo}. ano = ${req.query.ano}`)
    console.log(`Relatorio`)
    next()

})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on(`data`, function(parte){
    //     corpo+= parte
    // })

    // req.on('end', function(){
    //     res.send(corpo)
    // })

    // converter em json. mas tem q receber em json
    // req.on('end', function(){
    //     res.send(JSON.parse(corpo))
    // })

    // req.body ja foi criado pelo body-parser
    // res.send(req.body)
    // res.send(req.body.nome)
    res.send(JSON.stringify(req.body))
})

// ordem que as coisas são chamadas é importante

// parametro q pode ser mudado na url
// http://localhost:3000/cliente/2
app.get('/cliente/:id', (req, res, next) => {
    const id = req.params.id
    res.send(`Cliente ${id} selecionado!`)
    console.log(`Cliente Selecionado`)

    next()
})

// cadeia de responsabildade

app.get('/opa', (req, res, next) => {

    console.log("Durante")

    // resposta em formato json
    res.json(
        [{
            data: [
                {
                    count: 3,
                    skip: 0,
                    limit: 3,
                    stauts: 200
                }
            ]
        },
        {
            products:
                [
                    {
                        name: "Ipad 64G",
                        price: 999.99,
                        discount: 10,
                        position: 1
                    },
                    {
                        name: "Smartphone Samsumg",
                        price: 2000,
                        discount: 50,
                        position: 2
                    },
                    {
                        name: "Tablet",
                        price: 500,
                        discount: 20,
                        position: 3
                    }
                ],
        }]
    )
    next()
    // res.send("I'm fine")
})

app.use('/opa', (req, res) => {
    console.log("Depois")
})

app.listen(3000, () => {
    console.log("Backend executando!")
})

