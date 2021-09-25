// dentro do node temos alguns objts e contantes disponiveis globalmente
// ex: __dirname
// obj: global
// obj: process

// obj process consegue ler dados do teclado do usuario
// consegue imprimir na entrada padrao e tbm na saida padrao
// do computador (entra padrao: teclado, saida padrao: tela)

const anonimo = process.argv.indexOf('-a') !== -1 // se estiver presente dentro da lista de argumento, o -a, ele vai retornar verdadeiro

console.log(anonimo)

//pegando parametros a partir da chamada direta no terminal

//node "172 - entradaSaidaPadrao.js" -b
//false

// node "172 - entradaSaidaPadrao.js" -a
// true


if(anonimo){ // caso for true:
    process.stdout.write('Fala Anônimo!\n') // stdout (standart output padrão)
    process.exit() // matar aplicacao
} else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {  // evento ondata acontece quando digita algo e da enter | enter salvo dentro da variavel data
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}