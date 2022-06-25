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


app.use((req, res) => {
    res.send("I'm fine")
})

app.listen(3000, () => {
    console.log("Backend executando!")
})

