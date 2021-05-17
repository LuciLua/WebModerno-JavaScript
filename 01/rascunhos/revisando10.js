function Pessoa(){
    this.nome = 'Luci';
    this.idade = 19;
    this.ocupacao = 'Estudante';
    this.contador =  0;

    const self = this
    
    setInterval(function(){
        self.nome
        self.idade
        self.ocupacao
        self.contador++

        console.log('-------------\nid:',self.contador,'\nnome:', self.nome,'\nidade:', self.idade,'\nocupação:', self.ocupacao)

    }, 500)
}

new Pessoa
