function criancas(altA, taxA, altB, taxB){

    function Crianca(nome, altura, taxa){
        this.nome = nome
        this.altura = altura
        this.taxa = taxa
        this.info = function(){ console.log(`Criança ${this.nome} \nAltura: ${this.altura}cm \nTaxa: ${this.taxa}cm por ano\n`)}
    }

    const criancaAObj = new Crianca('Felipe', altA, taxA)
    const criancaBObj = new Crianca('Milena', altB, taxB)

    criancaAObj.info()
    criancaBObj.info()

    const criancasAll = [criancaAObj, criancaBObj]

    const criancaMenor = []
    
    for (let i = 0; i < criancasAll.length; i++){

        if (criancasAll[i].altura !== criancasAll[0].altura || criancasAll[i].altura !== criancasAll[1].altura){
            
            while (criancaMenor[0] > criancasAll[i].altura){
                criancaMenor[0] = criancasAll[i].altura
                criancaMenor[1] = (criancasAll[i].nome)
                criancaMenor[2] = (criancasAll[i].taxa)
            }  
            
            criancaMenor.push((criancasAll[i].altura), criancasAll[i].nome)

            function calcFaltaQuanto(){
                function calcFaltaQuantoTaxa(){
                    var faltaTaxa = 0
                    if (criancaMenor[2] == criancaMenor[2]){
                        faltaTaxa = (falta - criancaMenor[2]) 
                    }
                    return faltaTaxa
                }   

                var falta = criancasAll[i].altura - criancaMenor[0]
                return console.log('faltam: ',falta,'cm para que o menor alcance o maior num periodo de:', calcFaltaQuantoTaxa(),'anos')
            }  

        } 
        
        else {
            criancaMenor[0] = 'Alturas iguais'
            criancaMenor[1] = 'Alturas iguais'
            function calcFaltaQuanto(){
                return '0'
            }
        }
        
    }

    console.log('Altura da menor criança: ',criancaMenor[0], '\nNome:', criancaMenor[1])
    calcFaltaQuanto()
}

criancas(130,10,160,30) // crianca A: alt=23 tax=4 | crianca B: alt=56 tax=7

// se uma criançaA cresce 25 cm por ano
// se uma criançaB cresce 30 cm por ano

// 4 anos necessario para a 1 chegar na 2
