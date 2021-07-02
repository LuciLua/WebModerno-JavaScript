function criancas(altA, taxA, altB, taxB){

    // Crianca e o que ira receber para cada instancia
    function Crianca(nome, altura, taxa){
        this.nome = nome
        this.altura = altura
        this.taxa = taxa
        this.info = function(){ console.log(`Criança ${this.nome} \nAltura: ${this.altura}cm \nTaxa: ${this.taxa}cm por ano\n`)}
    }

    //criando instancia para cada criança, cada uma com um parametro definido dentro da funcao criancas
    const criancaAObj = new Crianca('Felipe', altA, taxA)
    const criancaBObj = new Crianca('Milena', altB, taxB)

    // chamando a funcao publica info dentro atravez das instancias
    criancaAObj.info()
    criancaBObj.info()

    //Armazenando em uma lista as instancias/criancas
    const criancasAll = [criancaAObj, criancaBObj]

    //lista para colocar os dados da crianca de altura menor
    const criancaMenor = []
    
    // percorre a lista de todas as crianças
    for (let i = 0; i < criancasAll.length; i++){

        // se as alturas forem diferentes
        if (criancasAll[i].altura !== criancasAll[0].altura || criancasAll[i].altura !== criancasAll[1].altura){
            
            // encontra a criança de menor altura
            while (criancaMenor[0] > criancasAll[i].altura){
                criancaMenor[0] = criancasAll[i].altura
                criancaMenor[1] = (criancasAll[i].nome)
                criancaMenor[2] = (criancasAll[i].taxa)
            }  
            
            //insere na lista da crianca menor seus respectivos dados
            criancaMenor.push((criancasAll[i].altura), criancasAll[i].nome, criancasAll[i].taxa)

            // calcule quantos centimetros faltam para o menor alcancar o maior
            function calcFaltaQuanto(){

                var faltamQuantosCm = criancasAll[i].altura - criancaMenor[0]

                //calcule quantos anos levara para o menor alcancar o maior de acordo com a taxa de crescimento por ano do menor
                function calcFaltaQuantoTaxa(){
                    var faltamQuantosAnos = 0
                    faltamQuantosAnos = faltamQuantosCm/criancaMenor[2] // criancaMenor[2] = taxa da crianca menor
                    return faltamQuantosAnos
                }   

                return console.log('Faltam: ',faltamQuantosCm,'cm para que a criança menor alcance a criança maior.\nNum periodo de:', calcFaltaQuantoTaxa(),'anos')
            }  

        } 
        //Se as alturas das crianças forem iguais
        else {
            criancaMenor[0] = 'Alturas iguais'
            criancaMenor[1] = 'Alturas iguais'
            function calcFaltaQuanto(){ // apenas para nao dar erro
                return '0'
            }
        }
        
    }
    console.log(`Altura da menor criança: ${criancaMenor[0]} \nNome: ${criancaMenor[1]}`)
    calcFaltaQuanto()
}

criancas(130,10,160,30) // altura crianca 1 e taxa crianca 1 .... altura crianca 2 e taxa crianca 2