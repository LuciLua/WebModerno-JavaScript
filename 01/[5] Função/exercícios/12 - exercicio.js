function fatorial(num){  
    var num = num
    var result = num

    if (num == 0){
        result = 1
    }

    for (let i = 1; i < num; i++){
        // console.log(result *= i)
        result *= i
    }
    // imprime o ultimo resultado de result=*i
    console.log(result)
}

fatorial(0)
fatorial(8)