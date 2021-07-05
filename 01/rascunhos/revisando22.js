function recebeString(stringA, stringB){
    let contido = true
    for (let i = 0; i < stringA.length; i++){
       let caracterStringA = stringA.charAt(i).toLowerCase()
        for (let o = 0; o < stringB.length; o++){
            let caracterStringB = stringB.charAt(o).toLowerCase() 
            if (caracterStringA == caracterStringB){
                contido = true
                break
            } else {
                contido = false
            }
        } 
        if (!contido){
           return contido + ' <= retornando o resultado final'
        }
    }
    return contido + ' <= retornando o resultado final'
}
console.log(recebeString('AbCd', 'efgh'))
console.log(recebeString('AbCd', 'dcaB'))