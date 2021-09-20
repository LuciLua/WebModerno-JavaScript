// npm é o gerenciador de pacotes do node
//npm =  NODE PACKAGE MANAGER

// ele (npm) é o responsável por baixar alguma biblioteca de terceiro

// npm i lodash

// i => install
// não quero que a pasta node_modules vá para o github

//é comum referenciar biblioteca a partir de _
// não é preciso passar caminho relativo
// pois já vai procurar dentro de node_modules. vai procurar o arquivo index.js
const _ = require('lodash')

setInterval(() => console.log(_.random(10,100)), 500)


// para isntalar de forma global:
// npm i -g nodemon

// nodemon da o refresh e pega a versao mais nova do codigo

// nodemon script.js