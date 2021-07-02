function criancas(altA, taxA, altB, taxB){

    function Crianca(altura, taxa){
        this.altura = altura
        this.taxa = taxa
        this.info = function(){ console.log('Altura: ',this.altura, '\nTaxa:', this.taxa)}
    }

    const criancaAObj = new Crianca(altA, taxA)
    const criancaBObj = new Crianca(altB, taxB)

    criancaAObj.info()
    criancaBObj.info()

    const criancasAll = [criancaAObj, criancaBObj]

    var criancaMaior = 0
    for (let i = 0; i < criancasAll.length; i++){
        while (criancaMaior < criancasAll[i].altura){
            criancaMaior = criancasAll[i].altura
        }        
    }
    console.log('Altura da maior criança: ',criancaMaior)
}

criancas(23,4,56,7)