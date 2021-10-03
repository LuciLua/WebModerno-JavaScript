function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max] // destructuring -> array// invertendo valores

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aletorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aletorio)){
            reject('Numero repetido')
        }
        else {
            resolve(aletorio)
        }
    })
}

async function gerarMegaSena(qtDeNumeros, tentativas = 1){ // sempre que marco funcao como assincrona ela retorna uma promessa

    try  {
        const numeros = []
        
        for(let _ of Array(qtDeNumeros).fill()){ // ??? => _ (mutabilidade local, dentro da funcao)
            
            // espera a geração e depois coloca isso dentro de um array
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
            // await vai ficar junto com a função que retorna a promise
        }
        return numeros // resolve a promise 
    }

    catch(e){ // é aqui que define o que acontece com o erro, se nao tratar: reject é chamado

        console.log('Tentando novamente...')
            if (tentativas > 3){
                throw "Que chato..." // gerar excessão é estar rejeitando uma promisse
            } else {
                gerarMegaSena(qtDeNumeros, tentativas + 1) 
            }
    } // 

}

gerarMegaSena(5)
.then(console.log)
.catch(console.log)