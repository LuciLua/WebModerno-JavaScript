function esperarPor(tempo = 2000){
    return new Promise(resolve =>  setTimeout(() => resolve(), tempo))
}

// node ainda n suporta a palavr 'await' diretamente dentro de um arquivo
// tem q colocar dentro de uma função async

// esperarPor(1000)
// .then(() => console.log('Executando promise 1...'))
// .then(esperarPor)
// .then(() => console.log('Executando promise 2...'))
// .then(esperarPor)
// .then(() => console.log('Executando promise 3...'))
// .then(esperarPor)
// .then(() => console.log('Executando promise 4...'))

// async => so vai para a proxima quando terminar a execucao


// é sincrona
function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000) // demora 5s para retornar valor 10
    })
}

async function retornarValorRapido(){
    return 20 // retorna 20 dentro de uma promise
}


// codigo assíncrono, parece sincrono mas nao é

async function executar(){

    // executando codigo de forma sincrona!
    // so vai para  a proxima quando terminar de executar a linah anterior 
    // dentro de uma funcao assincrona, posso fazer ela esperar 
    // sem usar o metodo then()

    let valor = await retornarValorRapido() // await faz com que ele extraia o valor

    // let valor = await retornarValor() // so quando o 'valor' for resolvido que vou para o resto

    await esperarPor(1500)
    console.log(`Em await 1... valor: ${valor}`)

    await esperarPor(1500)
    console.log(`Em await 2...valor: ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Em await 3...valor: ${valor + 2} `)

    // sempre que tem uma funcao que retorna um promise, posso usar ela junto com um
    // await


    return valor + 3

}

async function executarDeVerdade(){

    const valor = await executar()
    console.log(valor)
}


// executar()


executarDeVerdade()

// por tras do async await tem que ter uma promise





