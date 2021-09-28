// promises
// Promessa
// quando voce quer ter algum tipo de processamento assincrono

// 2 caminhos:
// - ser atendida
// - promessa se rejeitada


// promises é uma estrutura que tem por objetivo 
// representar uma operação assíncrona


function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject ) => { // resolve: funcao q vai ser chamada quando a promessa for atendida...
    // reject: quando vc quer rejeitar o atendimento da promessa
        setTimeout(() => {
            resolve(frase) // vai ser passada para o primeiro .then()
            // promise aceita apenas 1 unico parametro
        }, segundos * 1000)
        
    })
}

falarDepoisDe(1, 'Hello, world!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
// posso encadear quantops .then() eu qusier
// sempre que termina um .then(), o resultado de um vai passando par aoutro 


// quando retorna uma promise, a promise tem essa funcao .then()
// a funcao .then() é chamada quando RESOLVE a promise passando o objeto
// que vc deseja passar para a funcao .then()

falarDepoisDe(1.5, 'Teste!').then(f => console.log(f)) // tem sempre que passar o .then()


function falarDepoisDe2(segundos, frase, numero){
    return new Promise((resolve, reject ) => {
        if(numero == 1){
            setTimeout(() => {
                resolve(frase + '-resolve-')
            }, segundos * 1000)
        } else {
            setTimeout(() => {
                reject(frase + '-reject: DEU ERRO: nao executa os then, so o catch-')
            }, segundos * 1000)
        }
    })
}


// para tratar erro, preciso chamar funcao .catch()
// catch chama uma unica vez para tratar o erro

//then pode encadear, o result de uma passa para outra

falarDepoisDe2(2, 'minha frase aqui', 1)
.then(f => f.concat('/concatenando/'))
.then(f => f.concat('/tratamento 2/' + f.length + 'de tamanho contando com o de cima, pois encadeia os then....'))
.then(f => f.concat('novo tamanho:' + f.length ))
.then(f => console.log('TA CERTO:', f)) // se der certo (chama a frase)
.catch(erro => console.log('ERRO:', erro)) // se der errado



