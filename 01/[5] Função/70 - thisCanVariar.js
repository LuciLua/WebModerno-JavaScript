// this pode variar

/**
 * this
 * outras linguagens chama de self
 * 
 * this => referenciar o objeto atual daquela execução
 *  
 */

// no browser
/**
 * function f1() { console.log(this === window) }
 * 
 * true
 * 
 * this -> aponta para um contexto global do browser
 * this é sempre o objeto que está sendo referenciado naquele contexto de execução / dono  da fução
 * que está sendoe executada naquele contexto
 * 
 * document.getElementsByTagName('body')[0].onclick = f1
 * false, pois o this varia dependendo da forma com o que vc hama a função
 * 
 * function f2() {console.log(this === document)}
 * 
 * document.getElementsByTagName('body')[0].onclick = f2
 * false
 * 
 * function f2() {console.log(this === body)}
 * 
 * document.getElementsByTagName('body')[0].onclick = f2
 * click
 * true
 * 
 */


/**
 * motivos para se criar aero function:
 * 
 * - diminuir a sintaxe
 * ex:
 * const f3 = () => console.log(this === window)
 * 
 * - ter um this que não varia
 * 
 * document.getElementsByTagName('body')[0].onclick = f3
 * 
 * THIS PODE VARIAR DE ACORDO COM QUEM CHAMOU A FUNÇÃO
 * USANDO UMA AERO FUNCTION, O THIS NAO VARIA NUNCA,
 * THIS vai ser definido no momento que a função for definida.
 * no momento que a função é definida, ele pega o this associado ao contexto que a função foi definida =>>> this lexico
 * 
 * 
 */

const func1 = () => console.log('hello, world!')
func1()