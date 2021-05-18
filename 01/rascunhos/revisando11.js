const lola = {
    fala: 'Hello, World!',
    falar(){
        return this.fala
    }
}

const falarLola1 = lola.falar;

const falarLola2 = falarLola1.bind(lola);

console.log(falarLola2())

// test

console.log('----')

//global x = 9

global.x = 9;
console.log('x global: ',global.x)

const modul = {
    x: 81,
    getX: function(){ return this.x;}
}

console.log('x local sem agrupar: ',modul.getX()) // return x | 81 local

// imprie filho getX puxando do pai modul


const reX = modul.getX;

console.log('x global pois const reX está no contexto global com seu this: ',reX()) // return x | 9 global

const reXTransform = reX.bind(modul) // agrupando tudo e laçando com bind

console.log('x local já agrupado laçado com bind: ',reXTransform()) // return x | 81 local com bind 

// test2


console.log('<-----globas vs local----->')
global.a = 'A: global'
console.log('---> ',a) // return global

const obj = {
    a: 'A: local',
    impr: function() {return this.a}
}
console.log('---> ', obj.a) // return local

// const aZip = obj.impr;
// console.log('---> ',aZip()) //return global

const aZipOk = obj.impr.bind(obj)
console.log('---> ', aZipOk()) // return local



// test 3

function Humano(){
    this.num = 0

    const self = this

    setInterval(function(){
        
        self.num = self.num + 10
        console.log(self.num)
    }, 600)
}

new Humano
