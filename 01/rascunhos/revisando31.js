const listaIdades = lista => console.log(lista.map(e => e.idade))
const listaNomes = lista => console.log(lista.map(e => e.nome))
const lista = [
    {nome: 'Gizella', idade: 20},
    {nome: 'João', idade: 30},
    {nome: 'Maria', idade: 40},
    {nome: 'Conrado', idade: 50},
    {nome: 'Cintia', idade: 60},
]

listaNomes(lista)
listaIdades(lista)


const listaSomaIdades = lista => console.log(lista
    .map(e => e.idade)
    .reduce((acu, atual) => acu + atual)
    )

listaSomaIdades(lista)