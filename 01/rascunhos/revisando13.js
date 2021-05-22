function Caderno(paginasMax = 100, paginasProduzindo = 5){

    let paginasInicial = 0

    this.produzir = function(){
        if(paginasInicial + paginasProduzindo <= paginasMax){
            paginasInicial += paginasProduzindo
        } else {
            paginasInicial = paginasMax
        }
    }

    this.getPaginasInicial = function(){
        return paginasInicial
    }

    var name = ["cad", 0];

    this.nomear = function(){
        if(name === ''){
            name += 'DEV'
        } else {
            name = [name[0], ++name[1]]
        }
    }

    this.name = function(){
        return name
    }
}


const colibri = new Caderno()
colibri.produzir()
colibri.produzir()
colibri.produzir()
colibri.nomear()
console.log(`${colibri.getPaginasInicial()} páginas produzidas pelo caderno de marca ${colibri.name()}`)

const arial = new Caderno()
arial.produzir()
arial.produzir()
arial.produzir()
arial.produzir()

arial.nomear()
arial.nomear()
console.log(`${arial.getPaginasInicial()} páginas produzidas pelo caderno de marca ${arial.name()}`)

const feso = new Caderno(10,2)
feso.produzir()
feso.produzir()
feso.produzir()
feso.produzir()

feso.nomear()
feso.nomear()
feso.nomear()
console.log(`${feso.getPaginasInicial()} páginas produzidas pelo caderno de marca ${feso.name()}`)