// this dentro de uma função arrow é um this fixo

function Pessoa(){
    this.idade = 0 

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa