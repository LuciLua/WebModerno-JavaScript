// ler e escrever arquivo usando node
// modulo fs: filesystem
// ler e escrever, verificar conteudo de uma pasta...


const fs = require('fs')


const caminho = __dirname + '/arquivo.json' // pegue o arquivo tal do diretorio atual 

// evitar ler arquivos grandes para nao travar o event loop
// ler arquivo de forma sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8') // caminho, encode
console.log(conteudo)


// assincrono 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
}) // passando uma callback para ser chamada assim q o arquivo tiver sido carregado


// outro metodo d ler arquivo

const config = require('./arquivo.json') // ja retorna um objeto instanciado
console.log(config)


// o9utra forma


// __dirname => diretorio atual
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta:', arquivos) // todos os arquivos presentes nessa pasta
})