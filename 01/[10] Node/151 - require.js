// sair de uma pasta '../'
// respeitar letras maiusculas e minusculas para nome dos arquivos

// descritor de um projeto node: package.json

const saudacao = require('./node_modules/saudacao') // BUSCOU O ARQUIVO INDEX.JS

console.log(saudacao.ola)

// modulos pre-instalados com o node: modulos core

// const http = require('http')
// http.createServer((req,res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8081)


// control alt m
// para finalizar

const c = require('./Pasta_A/Pasta_B/Pasta C')
console.log(c.ola2)

// index pode ser o 'lobby' para acessar outros arquivos