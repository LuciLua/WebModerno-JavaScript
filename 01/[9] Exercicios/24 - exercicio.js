function contarCaractere(letra, string){
    var quantidadeLetra = 0
    for(let i = 0; i < string.split('').length; i++){
        if (string.split('')[i] === letra) quantidadeLetra++
    }
    console.log(quantidadeLetra)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
contarCaractere("x", "Conhecxe-te xa ti x mexsXXmo") // retornará 4