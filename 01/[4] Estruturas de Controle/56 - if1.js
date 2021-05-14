function soBoaNota(nota){
    if(nota >= 7){
        console.log('Aprovado com '+ nota)
    }
}

soBoaNota(8.1)
soBoaNota(7.1)
soBoaNota(6.1)



function serForVrddEuFalo(valor){
    if(valor){
        console.log('É Verdade...' +  valor)
    }
}


console.log('--------')

serForVrddEuFalo() //é undefined, string vazia/ é falso
serForVrddEuFalo(null) //é nulo / é falso
serForVrddEuFalo(undefined) //é undefined / é falso
serForVrddEuFalo(0) // unico numero que é falso / é falso
serForVrddEuFalo('') // falso

serForVrddEuFalo(-1) // vrdd
serForVrddEuFalo(' ') // vrdd
serForVrddEuFalo([]) // vrdd
serForVrddEuFalo({}) // vrdd
serForVrddEuFalo([1,2,3]) // vrdd
serForVrddEuFalo('Que eu to falando') //vrdd