// Quando cria variaveis globais/ escobo globais acaba 

/* no console do browser:
* Window
* this
* this === window  //imprime true
*
* let b = 3
* let --> é diferente pois:
* variavel declarada no escopo global ainda será global mas não irá
* para o objeto window.b
* e nao da pra declarar denovo, como o var faz (sobrepõe)
*
*
* evitar escopo global,
* const não da tanto problema mas EVITAR VAR EM ESCOPO GLOBAL
*
*
* function f1 = () => console.log(this === window)
*   da pra chamar no window, this e f1()
* 
* const f2 = () => console.log(this === window)
*
* só da com f2() | não da com window.f2()  nem this.f2()
* pois: constantes e variaveis dclaradas com let nao irao diretamente para o objeto global window
* eles ficam num lugar memoria no boewser
* 
* let pessoa = {nome: "Ana", falar: function() {return `Eu sou ${this.nome}`}} 
* 
* function() ---> função anonima
* `eu sou...` ---> template string delimitado por crase
* this ---> a pessoa
*
*   pessoa.falar()
*
* mas se eu for executar fora: this.nome
* não tem pois o this === window
*
* pessoa.verificarEscopo = function(){return this === window}
*
* false pois o this = pessoa e nao igual a window
*/

let a = 3

// let nao fica no global, é local

global.b = 123

this.c = 456

console.log(this.a) //retorna undefined
console.log(global.a) //retorna undefined

console.log(global.b) //retorna 123
console.log(this.c) //retorna 456
console.log(module.exports.c) //retorna 456
console.log(module.exports == this) //retorna true

// this === module exports
// this.c  = (valor) | significa que ele vai 
// esportar esse para fora desse arquivo
// dentro de node cada arquivo é um modulo

//  A palavra reservada this é utilizada para fazer uma auto referência ao contexto léxico atual

this.d = false
this.e = 'teste'

console.log(module.exports)

// module.exports = { f: 456, g: false, h: 'teste' }


//criando uma variavel sem var e let
// !!!!!!!!!não fazer isso!!!!!!!!
abc = 3
console.log(global.abc)
// !!!!!!!!!não fazer isso!!!!!!!!