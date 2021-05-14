// try -> é um bloco de código, que dentro dele tem um código que você julga que pode gerar algum tipo de erro.

//try para codigos potencialmente perigosos

// gerando um erro, associar try caindo dentro do catch. No erro cai dentro do catch.

// catch ->  mostrar pro user que deu erro... etc
// throw -> lançar/ou relançar um erro

//finally --> também para tratar erro. Será executado sempre mesmoq ue ocorra erro ou não, vai chamar esse bloco. Depois que acabou o try ele direciona o finally.
// Se erro no try, direciona para o catch, catch executa função e chama o finally

function tratarErroELancar(erro){
    // throw new Error('Ocorreu um erro.')
    // throw "Erro";
    // throw false
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('Operação Finalizada')
    }
}

const obj = { name: 'Luci' }
// const obj = { nome: 'Luci' }
imprimirNomeGritado(obj)

