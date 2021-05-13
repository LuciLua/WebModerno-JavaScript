console.log('------usando var 1----')

{
    {
        {
            var visivel = ' visivel em tudo pois seu escopo é global // e tem escopo de funcao tbm'
        }
    }
}

console.log(visivel)

function sera(){
    var local = 123
    console.log(local)
}

sera()
///não da:  console.log(local)

//VARIAVEL SO TEM 2 ESCOPOS POSSIVEIS:
// ---> ou ele é global (visivel na app inteira)
// ---> ou ele é no escopo de funcao

console.log('------usando var 2----')

var numero = 1
{
    var numero = 2
    console.log('dentro: ', numero)
}

console.log('fora: ', numero)

/**Sem escopo de bloco para variavel tipo var */

console.log('------usando var em loop 2----')


function ok(a){
    return (3)
}

console.log(ok())

console.log('----------')

for (var i = 0; i <= 10; i++) {
    console.log(i)
}
console.log('i=', i)


console.log('-----------')

function Obj(teste1,teste2,teste3, teste4){
    this.teste1 = teste1
    this.teste2 = teste2
    this.teste3 = teste3
    this.teste4 = 'teste4'
    this.exec = function(){
        console.log('funcao publica com o this')
    }
}


const pub = new Obj('teste1','teste2', 'teste3')

pub.exec()

console.log(pub.teste1,pub.teste2,pub.teste3, pub.teste4)