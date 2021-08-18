function inverso(BolNum){
    if(typeof BolNum == "number"){
        console.log(typeof BolNum, ':', (BolNum - (2*BolNum)))
    }
    else if (typeof BolNum == "boolean"){
        console.log(typeof BolNum, ':', BolNum ? false : true)
    }
    else{
        console.log("booleano ou número esperados, mas o parâmetro é do tipo: " + typeof BolNum)
    }
}

inverso('dl')
inverso(true)
inverso(false)
inverso(3)

// resolution 2

function inverso2(BolNum){
    if (typeof BolNum == "number"){console.log(typeof BolNum, ':', -BolNum)}
    else if (typeof BolNum == "boolean"){console.log(typeof BolNum, ':', !BolNum)}
    else {console.log("booleano ou número esperados, mas o parâmetro é do tipo: "+typeof BolNum)
}}

inverso2('dl')
inverso2(true)
inverso2(false)
inverso2(3)
