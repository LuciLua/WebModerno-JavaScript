const express = require('express')
const nodemon = require('nodemon')
const app = express()

// nodemon: disparador/launcher
// responsavel para chamar a aplicacao usando node
// vantagem: monitora os arquivos


app.listen(3000, () => {
    console.log("Backend executando!")
})

