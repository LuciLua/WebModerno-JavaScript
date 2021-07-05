const listaA = ['ovo', 'azeitona', 'uva']
const listaB = ['M1', 'M2', 'M3']

function pushConcat(...args){

    let result = []

    for (let i = 0; i < arguments.length; i++){
        // result = result.concat(arguments[i]) // um por um
        result.push(arguments[i]) // array por array
    }
    console.log(result.join(' ...e... '))
}


pushConcat(listaA, listaB)


pushConcat('ola', 'mano', 'como')


pushConcat(['ola', 'mano', 'como'], 2, 4 ,5)

pushConcat(['ola', 'mano', 'como'], [2, 4 ,5])


pushConcat(['ola', 'mano', 'como'], [2, 4 ,5], ['tururururu'])