// quando altera atributo diretamente  (ex: pessoa.idade)
// você nao tem como impedir que algum codigo coloque uma idade negativa por exemplo

// pega atributos de um objeto -> tornar esse atributos privados -> acessa esses
//atributos a partir de metodos (getter, setters) (getter=ler valor de variavel) (setter=alterar valor d euma variavel)

const sequencia = {
    _valor: 1, // '_' convenção para ser acessada internamente, mas n deixa particular. n impede alteração
    get valor() { return this._valor++},
     //dentro dessas funções os valores sao acessados
    // vantagem : pode fazer algum tipo de validação, rpocessamento, antes de devolver o valor da variavel

    set valor(valor) { 
        if (valor > this._valor){
            this._valor = valor
        }
     }

}


console.log(sequencia.valor, sequencia.valor, sequencia.valor) //chamei atributo, e nao valor


//javascript nao aceita sobrecarga de metodos 
//sobrecarregar: varios metodos com o mesmo nome com parametros diferentes;
// a nao ser com o get set


sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor, sequencia.valor)


sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor, sequencia.valor)

// para ter nivel maior de encapsulamento de seu objeto
// convenção particular
