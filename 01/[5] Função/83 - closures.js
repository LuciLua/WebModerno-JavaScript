// Closures é o escopo criado quando uma função é declarada
// Esse escopo permite acesssar e manipular variaveis externas à função

// closure > fechamento

// Contexto lexico em ação!

const x = 'Global'

function fora(){
    const x  = 'Local'
    function dentro(){
        return x
    }

    return dentro()
}


// função lembra das suas origens

const myFunc = fora()
console.log(myFunc)

