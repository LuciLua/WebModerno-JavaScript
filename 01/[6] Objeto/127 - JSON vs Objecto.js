// JSON => formato textual diferente da notação literal de objeto

// JSON é um formato de dados
// interoperabilidade entre sitemas

// formato mais simples e direto

// migração de dado entre sistemas e de sistemas para outros



const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){return a + b + c}
}

//JSON é um formato de dados, por isso nao saiu a função.

console.log(JSON.stringify(obj)) // transforma em JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // de JSON para objeto

console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": [], "f": 1.7 }'))

// atributos sempre delimitados por aspas duplas!

