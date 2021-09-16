function inverter(obj){
    const newObj = {}
    console.log(Object.entries(obj))
    Object.entries(obj).forEach(keyValue => {
        const key = 0,
        value = 1

        newObj[ keyValue[value] ] = keyValue[key] // ???
    })

    console.log(newObj)
}

inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}