console.log(typeof console)
valor = 6.11
console.log('arredondar para cima o valor ',valor,':',Math.ceil(valor)) // arredonda para cima
console.log('arredondar para baixo o valor ',valor,':',Math.floor(valor)) // arredonda para baixo

const obj1 = {} // notação literal
obj1.nome = 'Bola'  // <---- criando dinamicamente um atributo dentro de um objeto | utilizando notacao ponto  | melhor, mais facil de usar e enxuta

obj1['nome'] = 'Bola'  // <---- mesma coisa que o de cima

console.log('------------')

console.log('atributo nome do obj1: ',obj1.nome)

console.log('------------')


function Oj(nom,nam) { 
    this.nom = nom 
    this.nam = nam
    this.pub = 'publico'
    pri = 'privado'
    console.log('Dentro da function: ',this.nom, this.nam, this.pub, pri)
}

const public = new Oj('Nom', 'Nam')
console.log('Fora da function: ',public.nom, public.nam, public.pub, public.pri)

console.log('------------')
Oj() // undefined nom e nam pois não atribui valor!!

console.log('------------')

function Obj(nome) {  //parametro da funcao: nome
    this.nome = nome //this --> o nome associado ao objeto que for criado a partir dessa funcao
    // /\ significa nesse contexto: receber o atributo nome (nome) por parametro e vai atribuir o this.nome
    // que ficara visivel pra quem isntanciar/criar um objeto Obj, ou seja: vai ficar publico
    this.exec = function(){
        console.log('func ao dentro de outra funcao!')
    }
}

const obj2 = new Obj('cadeira') //ou seja: o obj2 vai ter atributo (nome) que ficou publico/visivel pois eu associo nome
// ao this
const obj3 = new Obj('Mesa')


console.log(obj3.nome)
obj3.exec()

// acessa as coisas a partir da notacao ponto

