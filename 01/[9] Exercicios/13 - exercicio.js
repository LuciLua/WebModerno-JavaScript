function filtrarNumeros(array){
    const newArray = []
    array.forEach(e => {
        if (typeof e == "number") newArray.push(e)
    })
    console.log(newArray)
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornarĂ¡ [1, 20]
filtrarNumeros(["a", "c"]) // retornarĂ¡ []


// resolucao 2

function filtrarNumerosD(array) {
    console.log(array.filter(item => typeof item === "number"))
}

filtrarNumerosD(["Javascript", 1, "3", "Web", 20]) // retornarĂ¡ [1, 20]
filtrarNumerosD(["a", "c"]) // retornarĂ¡ []
