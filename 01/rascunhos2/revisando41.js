function q(valor){

    return new Promise((resolve, reject) => {


        // qualquer erro aqui, leva para o .catch()
        

        try{
            
            conso.log('Sou erro, que chamara reject')

            const obj = {
                x: 3,
                y: 4
            }

            var soma = obj.x + obj.y + valor

            if(valor == 12){
                reject('ErroOcurred: Valor precisa ser 12!')

            } else {
                resolve(`valor: ${valor} | x: ${obj.x} | y: ${obj.y} | soma: ${soma}`)
            }

            
        } 

        catch(e){
            reject('Tratando meu erro aqui: (' + e + ')')
        }

    })
}

q(14)
// q(12)

.then(console.log)
.catch(erro => console.log('nou nou! ocorreu erro => ', erro))