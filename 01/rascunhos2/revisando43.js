const alunos = [
    {
        nome: 'Julia',
        turma: 'A'
    },
    {
        nome: 'Luis',
        turma: 'B'
    },
    {
        nome: 'Ana',
        turma: 'B'
    },
    {
        nome: 'Lara',
        turma: 'A'
    },
    {
        nome: 'Thiago',
        turma: 'C'
    },
    {
        nome: 'Felipe',
        turma: 'A'
    },
    {
        nome: 'Matheus',
        turma: 'C'
    },
    {
        nome: 'Manoela',
        turma: 'C'
    },
    {
        nome: 'Isis',
        turma: 'B'
    },
    {
        nome: 'Bianca',
        turma: 'B'
    }
]

function getNomesPorTurma(alunos, turma){

   getNumeroAleatorioEntre(0, alunos.length)

        return new Promise((resolve, reject) => {
            console.log('Resolvendo a promessa...')
            var nomes = alunos.filter(a => a.turma == turma)
            
            
            if(nomes.length > 0){
                resolve(nomes)
            }
            else {
                reject(erro)
            }
        })
}

function getNumeroAleatorioEntre(min, max){

    setTimeout(() => {

        max < min ? [min, max] = [max, min] : max == max & min == min
        var random = Math.floor(Math.random() * (max - min + 1) + min)
        
        console.log(`random: ${random}`)


    }, 2000)

}

getNomesPorTurma(alunos, 'B')
    .then(console.log)
    .catch(e => console.log(e + ' - Não existe a turma solicitada'))