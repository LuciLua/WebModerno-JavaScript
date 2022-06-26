const express = require('express')
const app = express()

// so será chamad se a url for /test
// app.use('/test', (req, res) => {
//     res.send("I'm fine")
// })

// aceita apenas  requisicoes tipo get
// app.get('/', (req, res) => {
//     res.send("I'm fine")
// })

// Função Middleware: Função que recebe requisição, resposta e next()

// funciona mas nao chama a proxima
app.use('/opa', (req, res, next) => {
    console.log("Antes")
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

