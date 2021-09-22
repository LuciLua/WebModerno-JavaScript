// quando um modulo é importado, por padrão ele é cacheado
// node faz cache dos modulos

// node mantém instancia unica
module.exports = {
    valor: 1,
    increment(){
        this.valor++
    }
}

