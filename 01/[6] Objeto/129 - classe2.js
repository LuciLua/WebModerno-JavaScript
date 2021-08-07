// o que acontece em herança tambem vai acontecer quando mexe com classe
// classe é uma forma diferente de escrever uma função em javascript 

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}


class Pai extends Avo{ //definindo que determinada classe tem outra classe como prototipo ===> ou seja: => que determinada função geradad apartir daquela classe, tera como prototipo uma outra função que seja gerada a partir da classe avo
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome) // super de superclasse. 
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho //instanciando o filho
console.log(filho)