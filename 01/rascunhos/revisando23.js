function foreachTest(vetorTeste){
    let testResultado = []
    vetorTeste.forEach(function (qualquerCoisa) {  testResultado.push(qualquerCoisa + ' edited') }); // função anonima ou pode ser tambem ....
   // vetorTeste.forEach(qualquerCoisa => {  testResultado.push(qualquerCoisa + ' edited') }); // uma array function
    return testResultado
}

console.log(foreachTest([1,2,34,56,87]))