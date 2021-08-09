Array.prototype.testePrototype = function(teste){
    for (let i = 0; i < this.length; i++){
        teste('This['+i+']: ' + this[i])
    }
}

nomes.testePrototype(e => {console.log(e)})


const numeros = 9
Number.prototype.numeroTeste = function(te){te('calculadora\n' + this + ' + ' + calc + ' = ' +(this + calc))}
numeros.numeroTeste(e => console.log(e), calc = 3)