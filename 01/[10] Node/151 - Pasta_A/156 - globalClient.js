require('../156 - objGlobalNode')

console.log(myApp.saudacao())
console.log(global.myApp.saudacao()) // pode colocar o global, mas n precisa

console.log(myApp.nome)
myApp.nome = 'Luci'
console.log(myApp.nome)
