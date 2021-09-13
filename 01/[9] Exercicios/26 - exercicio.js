function removerVogais(frase){
    var cadaLetra = frase.split('') 
    var novaFrase = []
    for(let i = 0; i < cadaLetra.length; i++){
        switch (cadaLetra[i]){
            case 'a': case 'e': case 'i': case 'o': case 'u':
            break
        default:
            novaFrase.push(cadaLetra[i])
        }
    }
    console.log(novaFrase.join(''))
}

removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"


//resolucao 2

function removerVogais2(frase){
    const vogais = ['a', 'e', 'i', 'o', 'u']
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    console.log(frase)
}

removerVogais2("Cod3r") // retornará "Cd3r"
removerVogais2("Fundamentos") // retornará "Fndmnts"