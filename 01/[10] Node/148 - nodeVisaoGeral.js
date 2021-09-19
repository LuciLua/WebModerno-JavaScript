// cliente = browser

/// estrutura cliente x servidor

//backend pode rodar em varias linguagens
// pode também rodar em javascript
// principal runtime do javascript é o node

//node usa mesm o interpretador do browser (V8)

// existe um codigo que é rodado no servidor
// e existe um codigo que é rodado no browser

// Javascript é uma linguagem que da possiblidade de rodar a mesma linguaguem
// tanto no browser quanto no server-side (backend)

// node = runtime que prov
// é possiblidade de rodar js no backend (servidor)
// não pra gerar HTML... mas gerar serviços

// NODE: Ambiente de execução do javascript do lado do servidor
// servidor = não esta rodando dentro do browser

// apache : servidor baseado em thread
// cada requisição = cria uma thread
// thread = processo, linha de execução independente dentro do computador

// JavaScript: linguagem preaparada para trabalhar com assincrono
// NodeJS = V8 + LIBUV

// V8 = > interpretador JavaScript que lê seu codigo e faz chamadas, chama a LIBUV
// LIBUV =>  nasceu para entender o node => responsavel por fazer parte de IO assincrono 


// NODE É UM RUNTIME JAVASCRIPT
// ELE É FORMADO POR 2 PARTES; O V8 (intepretador javascript de codigo aberto do Google)
// + o LIBUV (o que trata de forma assincrona a parte mais lenta de um rpocesso, como ler
// um banco de dados, acessar um arquivo... tudo que diz respeito a IO)

// não colocar operações pesadas no event loop. delegar a uma thread delegadora.