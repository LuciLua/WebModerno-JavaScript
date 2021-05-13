const funcs = []

for (var i = 0; i < 10; i++) {
    //puxar funcao sem nome e depois referenciar funcao a partir do array
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//imprim e valor 10 em todas as funcoes pq var n tem escopo