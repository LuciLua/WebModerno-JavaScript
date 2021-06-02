function func(base, expoente){
    console.log(base**expoente)
}
func(6, 2)

//outra forma porem melhor
const func2 = (base,expoente) => Math.pow(base, expoente)
console.log(func2(3,2))