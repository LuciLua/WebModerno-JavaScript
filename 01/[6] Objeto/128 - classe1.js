class Lancamento {
     constructor(nome = 'generico', valor = 0){
        this.nome = nome // adicionando ao objeto que esta sendo isntanciado, o atributo nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(e => this.lancamentos.push(e)) //  dando push em cada um dos lancamentos que recebi como parametro
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(e => {
            valorConsolidado += e.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salario:', 45000)
const contaLuz = new Lancamento('Luz:', -220)

const contas = new CicloFinanceiro(6 ,2018)

contas.addLancamentos(salario, contaLuz)
console.log(contas.sumario())