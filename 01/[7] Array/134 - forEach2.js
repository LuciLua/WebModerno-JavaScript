Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)
    }
}

const nomes = ['Luci', 'Maria', 'Joao', 'Pedrinho','Larissa']

nomes.forEach2(function(nome, indice, array){
    console.log(`${indice}) ${nome} - ${array}`)
})