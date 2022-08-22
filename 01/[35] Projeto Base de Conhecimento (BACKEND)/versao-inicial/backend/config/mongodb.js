const mongoose = require('mongoose')
const { stats } = require('../.env')
// vai implementar conexao com mongo db

mongoose.connect(stats, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })