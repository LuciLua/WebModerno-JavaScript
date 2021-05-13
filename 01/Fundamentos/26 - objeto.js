/*json --> javascript object notation
 json é um formato textual*/

/*OBJETO JAVA SCRIPTS NAO É MESMA COISA QUE JSON

nessa aula: notacao literal de objetos.
como criar obj em js e forma literal*/

const prod1 = {} //objeto vazio

//chaves: representa um objeto (forma litaral de escrever objeto)
// colochete: representa array

/*objeto: coleção de pares chave e valor
 nome doa tributo (identificador) e passa um valor para ele
pode ter outro objeto dentro do objeto*/


prod1.nome = 'Celular Ultra Mega' // identificador chamado: nome
    //valor: celular ultra mega

prod1.preco = 4999.90

prod1['desconto legal'] = 0.40 //evitar atributos com espaço
    //atribui valor de forma dinamica

console.log(prod1)

const prod2 = {
    nome: 'camisa Polo',
    preco: 79.90,

    objDetalhes: {
        gola: 'alta',
        estampa: true,
    }
}

prod2['descontao:'] =

    console.log(prod2)

console.log('Transformar em json:')
    //formato textual
'{"nome": "Camisa Polo", "preco": 79.90}'

//objeto: coleção de chaves e valor

//objeto DIFERENTE de Json

//objeto esta entre chave ---> const a = {objeto aqui} ----> nome:'ola'
// atributo nome ... valor: ola