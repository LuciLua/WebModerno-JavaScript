// tratamento e erros no contexto das promisses

// bloca try
// erro> cai no bloco catch, tem funcao chamada catch

function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try{

            con.log('temp')// erro simulado para chamar o reject

            if(Math.random() < chanceDeErro){ // math.random entre 0 e 1
                reject('Ocorreu um erro!')
            } else{
                resolve(valor)
            }
        } catch(e){
            console.log('chamando reject..')
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.4) // 10% de chance (pois 0.1 até zero é menos q 0.9 até 0)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), // erro proposital

        // erro => console.log(`Erro especifico: ${erro}`) // se tratar erro aqui, catch nao será chamado

        )
        
    // .then(console.log)
    .then(() => console.log('Quase Fim!')) // acontece com erro ou nao
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!')) // acontece com erro ou nao

    // depois do cath, nenhum valor vai ser obtido