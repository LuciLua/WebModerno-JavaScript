let pessoa = {nome: "Luci", falar: function(){ return `Olá! eu sou ${this.nome}`}}

console.log(`${pessoa.nome}: ${pessoa.falar()}`)

setTimeout(function(){console.log(`Olá, ${pessoa.nome}. Como vai?`)}, 500);

setTimeout(function(){console.log(`${pessoa.nome}: Vou bem, e você?`)}, 1500)



function sec([a, b]){
    if (a>b){
        console.log([a, b] = [ [b, a] ])
    }
    else{
        return console.log(a, b)
    }
}


sec([100, 80])




const pessoa = [n1, n2,,n4] = [23, 90,10,900]

console.log(pessoa[0])

console.log(n2,n4)