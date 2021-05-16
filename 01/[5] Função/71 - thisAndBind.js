const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

const falar = pessoa.falar()

// bind -> passa um objeto no qual você que seja resolvido o this.

const falarDePessoa = pessoa.falar.bind()

// pessoa como argumento para a função bind :
// sempre o this sera resolvido para pessoa.
// na função 'falar', o this é aconstante pessoa.


// bind, metodo responsável por amarrar um determinado objeto para ele ser o dono da execução sempre que o metodo é executado.

// sempre que eu chamar a função, sempre que eu referenciar o this,  ele sera o objeto que eu passei para função bind 


const falar2 = pessoa.falar
falar2()