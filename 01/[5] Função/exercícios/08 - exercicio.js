function Jogo(pontucao, jogo){
    this.pontucao = pontucao
    this.jogo = jogo
    return pontucao && jogo
}

const jogo1 = new Jogo(3,'j1')
const jogo2 = new Jogo(5,'j2')
const jogo3 = new Jogo(1,'j3')
const jogo4 = new Jogo(9,'j4')
const jogo5 = new Jogo(5,'j5')
const jogo6 = new Jogo(6,'j6')
const jogo7 = new Jogo(2,'j7')
const jogo8 = new Jogo(8,'j8')

const pontuacoes = []
pontuacoes.push(jogo1.pontucao, jogo2.pontucao, jogo3.pontucao, jogo4.pontucao, jogo5.pontucao, jogo6.pontucao, jogo7.pontucao, jogo8.pontucao)

const jogos = []
jogos.push(jogo1.jogo, jogo2.jogo, jogo3.jogo, jogo4.jogo, jogo5.jogo, jogo6.jogo, jogo7.jogo, jogo8.jogo)


function calc(pontuacoes){
    let pont = pontuacoes
    let record = 0
    let piorJ = 1
    let maiorP = pontuacoes[0]
    let menorP = pontuacoes[0]

    for (let i = 0; i < pont.length; i++){

        if (pont[i] > maiorP){
            maiorP = pont[i]
            record++
        }
        else if ( pontuacoes[i] < menorP){
            menorP = pont[i]
            piorJ++;
        }
    }

    return (`Número de records: ${record}\nNúmero de piores jogos: ${piorJ}\nMaior Pontuação: ${maiorP}\nMenor Pontuação: ${menorP}`)
}


console.log('--------------------------------')
console.log('total de jogos: ', pontuacoes.length)
console.log('--------------------------------')
console.log('Jogos:\n',jogos.join(' | '))
console.log('Pontuaçãoe:','\n',pontuacoes.join(' | '))
console.log('--------------------------------')
console.log(calc(pontuacoes))
console.log('--------------------------------')