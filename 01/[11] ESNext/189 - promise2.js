// Callback hell

// setTimeout(function() {
//     console.log('Executando callback...')
//     setTimeout(function(){
//         console.log('Executando callback...')
//         setTimeout(function(){
//             console.log('Executando callback...')
//         },2000)
//     },2000)
// }, 2000)

// com promises
function esperarPor(tempo = 2000){
    return new Promise((resolve) => { // preciso sempre isntanciar promise

        setTimeout(() => {
            console.log('Função chamada')
            resolve()
        }, tempo)

    })
}

esperarPor(3000)
.then(() => esperarPor(1000))
.then(() => esperarPor(5000))
.then(esperarPor)
