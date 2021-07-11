// pessoa aponta par um endereço de memória
// pessoa -> 123 -> {...}
const pessoa = { nome: 'joão' }
pessoa.nome = 'pedro'
console.log(pessoa)


//variavel pessoa --ponta para---> {..endereço : 456..} -> {...}  
// pessoa = {nome = 'Ana'}
// console.log(pessoa) não posso mudar constante


Object.freeze(pessoa)
//congelado pesoa
pessoa.nome = 'Maria'
pessoa.endereco  = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome) // ignona tentastiva de atribuição pois esta congelado


const pessoaConstante = Object.freeze ({nome: 'Jonatas'}) //objeto NUNCA mudará
// nem a variavel pode ser mudada e nem o objeto que foi criado pode ser mudado
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)


