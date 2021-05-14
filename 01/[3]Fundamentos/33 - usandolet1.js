var numero = 8 //escopo mais abrangente

{
    let numero = 6 //escopo menor
    console.log('dentro: ', numero) //procura primeiro no escopo mais perto
        //depois procura no abrangente se n achar no perto
}

console.log('fora: ', numero)

//var -> escopo global, e tem escopo de funcao
//let -> escopo global, escopo de funcao e escopo de bloco