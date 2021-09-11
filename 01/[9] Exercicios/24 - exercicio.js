function contarCaractere(letra, string){
    var quantidadeLetra = 0
    for(let i = 0; i < string.length; i++){
        if (string.split('')[i] === letra) quantidadeLetra++
    }
    console.log(quantidadeLetra)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
contarCaractere("x", "Conhecxe-te xa ti x mexsXXmo") // retornará 4


console.log('----------------------------------')
//outras resolucoes

function contarCaractere2(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
        if (frase.charAt(i) === caractereBuscado) contador++ 
        console.log(contador)
}
// string.split('')[i] = string.charAt(i)


contarCaractere2("r", "A sorte favorece os audazes") // retornará 2
contarCaractere2("c", "Conhece-te a ti mesmo") // retornará 1
contarCaractere2("x", "Conhecxe-te xa ti x mexsXXmo") // retornará 4


//outra resolucao
console.log('----------------------------------')

function contarCaractere3(caractereBuscado, frase) {
    console.log ([...frase].filter(caractere => caractere === caractereBuscado).length)
}


contarCaractere3("r", "A sorte favorece os audazes") // retornará 2
contarCaractere3("c", "Conhece-te a ti mesmo") // retornará 1
contarCaractere3("x", "Conhecxe-te xa ti x mexsXXmo") // retornará 4
