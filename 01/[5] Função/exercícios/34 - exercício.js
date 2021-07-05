function recebeString(stringA, stringB){

    let contido = true
    
    // passa pelo primeiro for e depois vai para o segundo
    for (let i = 0; i < stringA.length; i++){
       let caracterStringA = stringA.charAt(i).toLowerCase() // passa por cada letra da primeira string e trasnforma em minuscula => armazenanod em uma variavel let cada
       console.log('primeiro for: ',caracterStringA)

        for (let o = 0; o < stringB.length; o++){
            let caracterStringB = stringB.charAt(o).toLowerCase() // passa por cada letra da segunda strin e transforma em maiuscula => armazenanod em uma variavel let cada 
            console.log('segundo for: ',caracterStringB)
       
            if (caracterStringA == caracterStringB){ // passa por todas as letras de B procurando uma que seja igual a 'caractere A'
                contido = true  + ' - encontrou na B o caractere de A!' // se encontrar, para a busca pelo 'for' da string B e vai para a próxima letra do primeiro for, ou seja, nos caracterers da 'string A'
                break // break não afeta o IF mas sim o FOR !!!!!!!!!!!! (o for mais proximo, no caso o segundo=> fazendo ir para a prxima letra do 'for' A)

            } else{ // se não encontrar, significa que não está contido 
                contido = false + ' - não encontrou na B o caractere de A!' // sem break=> vai para a proxima letra do segundo for até que acabe.
            }
        } 


        if (!contido){
           return contido //?
        }


    }

    return contido + ' <= retornando o resultado final'
}

console.log(recebeString('AbCd', 'efgh'))
console.log(recebeString('AbCd', 'dcaB'))