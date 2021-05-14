let valor //nao vou atribuir nada
console.log(valor)
valor = null
    //null significa que: AUSENCIA DE VALOR
    // nao esta apontando para nenhum endereço de memoria
    //e nao tem nenhum valor

//Undefined: variavel que nunca foi inicializada
//usar nulo para zerar valor da variavel

console.log(valor)

const produto = {}
    // console.log(produto.preco.a)   propriedade 'a' nao existe em preco


//produto.preco = 3.50
produto.nome = 'Jaqueta'

//evitar undefined --> produto.preco = undefined

produto.preco = undefined
delete produto.preco


console.log(!!produto.preco, '|', produto)


produto.preco = null //esse produto ta sem preco --> mais apropriado
console.log(produto.preco, '| ', !!produto.preco)

/* Copia do valor (atrib por valor) cada var/const tem seu valor independent
 * E quando copia endereço de memoria (atrib por ref) as duas var/const
 * apontam p msm lugar
 */

//quando var ta nula ou undefined, n pode acessar nenhu membro, atribu da função da var