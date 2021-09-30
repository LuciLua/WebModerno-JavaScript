function gerarNumerosEntre(min, max, tempo){
    if(min > max) [max, min] = [min, max] // destructuring -> array// invertendo valores

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aletorio = parseInt(Math.random() * fator) + min
            resolve(aletorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
    return Promise.all([ // quando todos os elementos forem resolvidos só que ele vai chamar o then

        // serao chamadas em paralelo
        gerarNumerosEntre(1,60, 4000),
        gerarNumerosEntre(1,60, 3000),
        gerarNumerosEntre(1,60, 2000),
        gerarNumerosEntre(1,60, 1000),
        gerarNumerosEntre(1,60, 5000),
        gerarNumerosEntre(1,60, 500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then( () => {
        console.timeEnd('promise')
    })
