function criancas(altA, taxA, altB, taxB){

    function Crianca(nome, altura, taxa){
        this.nome = nome
        this.altura = altura
        this.taxa = taxa
        this.info = function(){ console.log('Criança',this.nome,'\nAltura: ',this.altura, '\nTaxa:', this.taxa, '\n')}
    }

    const criancaAObj = new Crianca('Felipe', altA, taxA)
    const criancaBObj = new Crianca('Milena', altB, taxB)

    criancaAObj.info()
    criancaBObj.info()

    const criancasAll = [criancaAObj, criancaBObj]

    // const criancaMaior = [0, 'Nome']
    const criancaMaior = []
    
    for (let i = 0; i < criancasAll.length; i++){

        if (criancasAll[i].altura !== criancasAll[0].altura || criancasAll[i].altura !== criancasAll[1].altura){
            criancaMaior.push((criancasAll[i].altura), criancasAll[i].nome)
    
            while (criancaMaior[0] > criancasAll[i].altura){
                criancaMaior[0] = criancasAll[i].altura
                criancaMaior[1] = (criancasAll[i].nome)
            }        

        } 
        
        else {
            criancaMaior[0] = 'Alturas iguais'
            criancaMaior[1] = 'Alturas iguais'
        }
        
    }
    console.log('Altura da menor criança: ',criancaMaior[0], '\nNome:', criancaMaior[1])
}

criancas(7,4,9,7) // crianca A: alt=23 tax=4 | crianca B: alt=56 tax=7