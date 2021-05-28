function Carro(marca,cor,portas){
    this.cor = 'red'
    this.portas = 2
    var capo = ['com', 'sem']
    var gps = true
    this.marca = 'uno'
    
    this.funcCar = function(){
        console.log(`Olá você é um parametro local mas eu posso te chamar pro escopo global pois eu sou uma função global com o this :) A cor do carro ${marca} é ${cor} e tem ${portas} portas... e tem gps?? ${gps}. Possiblidades de capô: ${capo.join(' ou ')}`)
    }   
    
    
    this.funcCor = () => console.log('cor:', cor)
    this.funcMarca = () => console.log('marca: ',marca)
    this.funcPortas = () => console.log('portas: ',portas)
}


const uno = new Carro ('Uno', 'branco', 4)
const fiat = new Carro ('Fiat', 'blue', 1)

console.log('------')

uno.funcCar()

console.log('------')


console.log('nossa oferta [1] de carro é:') 
const proposta1 = [(fiat.funcMarca()), (fiat.funcCor(), fiat.funcPortas())]
console.log('nossa oferta [2] de carro é:') 
const proposta2 = [(uno.funcMarca()), (uno.funcCor()), (uno.funcPortas())]