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