// função construtora
/** usa-se função em javascript como voce usaria classe em java
 * 
 * classe em javascript é uma força diferente de escrever uma função
 */

// função construtora que é o molde dos objetos que posso criar a partir dessa função

function Carro(velocidadeMax = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    //metodo publico  a aprtir da palavra reservada this
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta // acrescentar à velocidade atual, o valor de delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual //que é um atributo privado
    }
}


const uno = new Carro //instanciando objetos
uno.acelerar()
uno.acelerar()
// acelerando de 5 em 5
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
// acelerando de 20 em 20
console.log(ferrari.getVelocidadeAtual())



console.log(typeof Carro)
console.log(typeof ferrari)