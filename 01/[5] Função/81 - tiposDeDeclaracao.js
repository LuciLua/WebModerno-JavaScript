// function declaration ---> forma tradicional
console.log(soma(3,4))
// funciona pois interpretador do js carrega primeiro as funões e depois coemça a executar o codigo

function soma(x,y){
    return x + y
}
//-----------------------
// function expression

const sub = function (x,y){
    return x - y
}

console.log(sub(3,4))
// com function expression só consegue chamar a função depois que ela for declarada

//-----------------------
// named function expression
// pouco usada

const mult = function mult(x ,y){
    return x - y
} 



