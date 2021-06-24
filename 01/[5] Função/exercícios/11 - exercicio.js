const anos = [0, 4, 100, 40, 800, 2020, 2021] 
// const random = []

// for (let i = 100; i <= 2250; i++){
//     random.push([i])
// }

// const anos = random

const bissextos = []
const notBissextos = []

for (let i in anos){
    function bissexto(){
        if (anos[i] <= 0){
            console.log(anos[i], '=>',false, ' => ano 0')
          notBissextos.push('não é bissexto: ' + anos[i])
        }
        else if ( (anos[i] % 4 == 0 && anos[i] % 100 != 0) || (anos[i] % 400 == 0)){
            console.log(anos[i], '=>', true)
            bissextos.push('é bissexto: ' + anos[i])
        }        
        else {
            console.log(anos[i], '=>',false)
            notBissextos.push('não é bissexto: ' + anos[i])
        }
    }
    bissexto()
}

// console.log(bissextos.join('\n'))
// console.log(notBissextos.join('\n'))

