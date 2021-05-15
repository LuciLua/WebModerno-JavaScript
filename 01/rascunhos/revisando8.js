function login(username, password){
    username = username || 'Anonymous'
    password = password || 'defaultPass'
    return username + password
}

const LoginInVar = login()

console.log(login(null, '456'))
console.log(login(undefined, '456'))
console.log(login(0, '456'))

console.log(login('Luci', '456'))


console.log(login('Luci', ''))
console.log(login('Luci', null))
console.log(login('Luci', undefined))
console.log(login('Luci', 0))


console.log(LoginInVar)

console.log('--------')

function thisTest(){
    var id = (Math.random() * (10)).toFixed(2)
    return id
}

while (thisTest() != 5){
    var res = thisTest()
    console.log(res.replace('.', ','))
}

console.log('fim')

for (let i = 0; i <= 10; i++){
    var valor = (i.toString())
    console.log(valor)
}
console.log(typeof(valor))

console.log('--------')


const nameF = function(name){
    switch (name){
        case 'Luci':
            console.log('Seu nome é Luci')
            break
        case 'Pastel':
            console.log('Seu nome é Pastel')
            break
        case 'lola': case 'chique':
            console.log('Seu nome é lola ou chique')
            break
        default:
            console.log('Nome Inválido')
    }
}

nameF('chique')

pessoa = {
    name: 'luci',
    age: 19,
    job: false,
    estudent: true
}

for (let nome in pessoa){
    console.log(`tipo de dado ${nome}: para pessoa é: ${pessoa[nome]}`)
}