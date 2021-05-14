//par nome/valor

//contexto léxico -> local na qual a variavel foi definida fisicamente
//no codigo... contexto o qual tal valor foi definido

// contexto global, contexo de função...

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'faaaalaaa' //contexto léxico 2
    return saudacao
        //objetos sao grupos aninhados de pares nome/valor
} 

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    enderecos: {
        logradouro: 'rua itaipava',
        numero: 23,
        nome: 'contextos diferentes!'
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)

console.log('Nome do cliente:', cliente.nome) 
console.log('Nome do nome do endereço:', cliente.enderecos.nome) 
