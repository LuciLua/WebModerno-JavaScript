// ser mais curta
// ter um this associado a um contexto em que a função foi escrita

//função arrow é sempre uma função anonima
// se quiser chamar a função arrow depois, precisa armazenar ela numa variavel ou constante

let dobro = function (a){
    return 2 * a
}


console.log(dobro(2))

dobro = (a) => {
    return a * 2
}

// quando tem função de 1 unica linha

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

// -----------

let ola = function () {
    return 'Ola'
}

ola = () => 'Olá'

ola = _ => 'olá' // possui um paramtro

console.log(ola())

// -----------

