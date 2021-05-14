// caracteristica >
// cuidado > não usar ele com as estruturas e controle => 
// if (num > 7); 


// sem chaves no if--> so vai associar 1 sentençan

function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('Final') // esta fora do if
}

teste1(6)
teste1(8)


console.log('-----------------------')

function teste2(num){
    if(num > 7);
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)

console.log('-----------------------')
