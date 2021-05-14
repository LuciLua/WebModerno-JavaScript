const escola = 'cod3r'

// da X letra contando a partir do zero (0) (.charAt)
console.log('------------------', '\nPalavra: ', escola, '\n------------------', '\nprimeira letra:', escola.charAt(0), '\nsegunda letra:', escola.charAt(1), '\nterceira letra:', escola.charAt(2), '\nquarta letra:', escola.charAt(3), '\nquinta letra:', escola.charAt(4), '\n------------------')


// (charCodeAt) ---> vamos de tal letra na tabela ASCII
console.log(escola.charCodeAt(3))
console.log(escola.charCodeAt(0))

console.log('-------')


const nome = 'jucia'
console.log(nome, ':', nome.charCodeAt(0), nome.charCodeAt(1), nome.charCodeAt(2), nome.charCodeAt(3), nome.charCodeAt(4))


//Onde está o digito X na constante Y?
console.log('posicao dos digitos: ', nome.indexOf('l'), nome.indexOf('u'), nome.indexOf('c'), nome.indexOf('i'), nome.indexOf('a'))

// da a string a partir do digito da casa X
console.log(nome.substring(0))
console.log(nome.substring(1))
console.log(nome.substring(2))
console.log(nome.substring(3))
console.log(nome.substring(4))

console.log('-------')

// da a string a partir do digito da casa X até Y, sem incluir o Y

console.log(nome.substring(1, 4))

console.log('-------')


//concatenar
//litaral (Escola ): valor direto q se usa, sem armazenar numa variavel
console.log('Escola '.concat(escola).concat('!'))

//substituir coisa da 3 casa(X) pelo valor Y, que seria o 'e' no exemplo ai
console.log('de: ', escola, 'para: ', escola.replace(3, 'e'))

console.log('de: ', nome, 'para: ', nome.replace('j', 'l'))

//substituir todos os digitos para a letra X
// g > é a tag global
console.log(nome.replace(/\w/g, '0'))

console.log('-------')

// pegar string separada por virgula e converter para estrutura array
// Array: estrutura linear: agrupádor de variaiveis, com posições,
// em cada posição tem espaço para colcoar valor

console.log('Ana, Maria, Pedro'.split(','))

// ragex --> /,/

console.log('Ana, Maria, Pedro'.split(/,/))

//STRING: CADEIA DE CARACTERES DELIMITADA POR
//ASPASA SIMPLES, ASPAS SUPLAS OU POR CRASE


//console.log('Escola '.concat(escola).concat('!')) PODE SER SUBSTITUIDO POR:
console.log('Escola '.concat(escola.replace('3', 'EE')).concat('!'))
console.log('Escola ' + escola.replace('3', 'e') + '!')

console.log('3' + 2) //concatena, n soma. pois '+' faz sentido na concatenação//
console.log('4' - 1) //nao concatena pois '-' n faz sentido na concatecacao

//=================================================//