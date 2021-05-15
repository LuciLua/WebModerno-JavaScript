/** 
 * função é o presidente do pais javascript
 * 
 * função recebe parâmetros e retorna um determinado valor
 * 
 * linguagem trata a função como um dado
 *
 * */ 

/**
 * Função em JS é: First-Class Object (Citizens)
 * 
 * Higher-order function -> função de alta ordem
 * 
 */

// declarar função de forma literal
// function + nome da função | pode receber parametros e pode retornar valor
// retornar valor é opcional
// caso n retorne nada>> undefined


// criar função de forma literal (padrão)
function func1(parametros){ //eu sou um bloco! 
}


// Armazenar em uma variavel

// função anonima  atribuida para uma constante
// a partir disso posso obter essa função a partir dessa constante
const func2 = function(){ }


// Armazenar em um array

const array = [function(a,b){return a + b}, func1, func2]

console.log("a função que está no indice '0' do array é a soma entre | a + b = ",(array[0](2,3)))



// Armazenar função dentro de atributos de objeto

const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parametro para outra função

function run(fun){
    fun()
}

run(function (){ console.log('Executando...') })

// Uma função pode retornar/conter uma outra função

function soma(a,b){
    return function (c){
        return function(d, e){
            console.log((a + b + c + d)-e)
        }
    }
}

soma(2,3)(4)(5,2)

const primeiraFuncMais = soma(2,3)
primeiraFuncMais(4)(5,2)




