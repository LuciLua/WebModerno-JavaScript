// exemplo de callback no browser

// referencia dentro do browser que é disponivel globalmente que aponta para seu pagina (DOM)


document.getElementsByTagName('body')[0].onclick = function (e) {  // para cada clique ele chama a callback novamente
    console.log('o evento ocorreu!')
}


// exemplo apssado

fabricantes.forEach(imprimir)// quando ocorrear o evento de percorrer os elementos, chama essa função
 
fabricantes.forEach(function(fabricante){ 
    console.log('fabricante: ',fabricante)
})

console.log('--------\nCom Arrow Function:\n')

fabricantes.forEach(fabricante => console.log('fabricante: ',fabricante))