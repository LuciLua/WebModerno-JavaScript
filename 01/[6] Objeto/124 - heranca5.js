// TODOS ELES TEM UM ATRIBUTO CHAMADO .PROTOTYPE
// pois toda função têm um atributo chamado .prototype

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {// reverter string
    return this.split('').reverse().join('') //gerar array, quebrar string em cada uma das letras
}


console.log('Escola Cod3r'. reverse())


Array.prototype.first = function(){
    return this[0] // acessando array a partir do this
}

console.log(['a', 'b', 'c', 'd'].first())

Array.prototype.quantos = function(){
    return this.forEach(e => {
       console.log(e, 'têm:', e.length, 'letras')
    })
}

console.log((['xuxinha', 'bru', 'iago']).quantos())


String.prototype.toString = function (){ // evitar substituir comportamentos globais por pode gerar efeito catastrofico
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())