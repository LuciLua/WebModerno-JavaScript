//let da pra mduar valor pois é variavel
//const nao consegu mudar o valor
//escopo: local onde a variavel é visivel (tal variavel 
//fica visivel ate onde? ate onde ele fica acessivel?

{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

console.log(sera)

//em algumas linguagens, a var sera nao fica visivel foda desses blocos
// que nem eu fiz aqui

//var dentro de um bloco de codigo, que nao seja uma funcao,
// ficara visivel para todos que tiverem mesmo fora
// do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
    //console.log(local) ----> não consegue acessar

// POIS: Quando define uma variavel dentro de uma funcao, o escopo
// desss variavel, é visivel apenas dentro da funcao, e nao fora


//quando cria uma variavel fora de uma funcao, essa variavel é 
//GLOBAL

// exempo: console (f12 na aba branca)
// var a = 123 
// window.a = 123

//evitar variaveis para o escopo global

//VARIAVEL SO TEM 2 ESCOPOS POSSIVEIS:
// ---> ou ele é global (visivel na app inteira)
// ---> ou ele é no escopo de funcao