const funcs = []

for (let i = 0; i < 10; i++) {
    //puxar funcao sem nome e depois referenciar funcao a partir do array
    funcs.push(function() {
        console.log(i)
    })
}

//let tem "memoria", nao é que nem o var que so lembra do ultimo (10),
// do valor q saiu


funcs[0]()
funcs[1]()
funcs[2]()
funcs[3]()
funcs[4]()
    // ...
funcs[9]()



