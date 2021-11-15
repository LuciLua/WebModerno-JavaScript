function darNome(config){
    
    if(config.nome == 'luci'){
        console.log('Certo')
        console.log(config.nome, config.idade, config.sucesso())
    } else {
        console.log('erro')
    }
}

darNome({
    nome: 'luci',
    idade: 100,
    sucesso(){
        return this.idade * 2
    },
    erro(){
        return 'erro!!!'
    }

})