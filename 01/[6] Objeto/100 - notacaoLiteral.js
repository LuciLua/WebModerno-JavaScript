const a = 1
const b = 2
const c = 3

const ob1 = {a: a, b: b, c: c}
const ob2 = {a, b, c}

console.log(ob1, ob2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = {
    funcao1: function(){
        // ...
    }, 
    funcao2(){ //-forma reduzida de definir funcao dentro de um obj
        // ...
    }
}

console.log(obj5)


const obj6 = {}
obj6['teste'] = 'ola'
console.log(obj6)