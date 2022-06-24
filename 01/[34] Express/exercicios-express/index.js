const express = require('express')
const nodemon = require('nodemon')
const app = express()

// nodemon: disparador/launcher
// responsavel para chamar a aplicacao usando node
// vantagem: monitora os arquivos

// melhor usar o pm2
// pm2 monit 
// pm2 status
// pm2 restart
// pm2 restart appx-backend
// pm2 stop 0
// pm2 kill

// os dois sao launches

// pm2 pra producao, bom pra microserviços tbm
// nodemon pra desenvolvimento

app.listen(3000, () => {
    console.log("Backend executando!")
})

