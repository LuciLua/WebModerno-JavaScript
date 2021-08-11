Array.prototype.criative = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const luci = ['{"nome": "Luci", "idade": 20, "hobby": "Programar", "estuda": true}',
              '{"nome": "Geovan", "idade": 23, "hobby": "nadar", "estuda": false}']

const paraObj = json => JSON.parse(json)

let create = luci.criative(paraObj)
console.log(create[0])
console.log(create[1])

const nome = create[0].nome
console.log(nome)