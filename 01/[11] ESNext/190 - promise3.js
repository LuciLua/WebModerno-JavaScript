function gerarNumerosEntre(min, max){
    if(min > max) [max, min] = [min, max] // destructuring -> array// invertendo valores

    return new Promise(resolve => {
        const fator = max - min + 1
        const aletorio = parseInt(Math.random() * fator) + min
        resolve(aletorio)
    })
}

gerarNumerosEntre(10, 30)
.then(num => num * 10) // composição de funcoes
.then(console.log)