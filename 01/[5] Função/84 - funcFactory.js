// funções factory | funções fábrica
// factory é uma função que no final ela retorna um objeto, sempre retorna um novo objeto
// fabricar uma isntancia de um objeto RETORNANDO UM NOVO OBJETO


function criarPessoa(){
    return{ //retornando objeto
        nome: 'Ana',
        sobrenome: 'Silva'
    } // criar objeto a pártir da notação literal de objeto, estou criando uma nova instancia de pessoa
}

console.log(criarPessoa())
