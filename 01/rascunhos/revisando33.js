function filtrarMaiusculas(array, quantidadeDigitos){
    console.log(array.filter(e => e === String(e).toUpperCase() && String(e).length === quantidadeDigitos.length))
}

filtrarMaiusculas(['a', 'A', 'AA', 'bA', 'BB', 'AAa', 'CC', 'cc', 'c'], 'Aa')