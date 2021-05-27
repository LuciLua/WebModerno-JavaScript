// classe forma diferente de se contruir função em javascript

class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}


const luci = new Pessoa('lucia')
luci.falar()

// THIS PODE VARIAS AQUI, SE EU USAR NO BOROWSER POR EXEMPLO DOE DAR UNDEFINDE

// -----------------

const CreatePeople = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`) //Esse objeto tem ciencia do contexto lexico em q foi declarado
    }
}

const joao = CreatePeople('João')
joao.falar()