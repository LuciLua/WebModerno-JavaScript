const exportandoFuncao = () => "Oi, estou sendo exportada para outro arquivo :)"

const multiplicarPorDois = (num) => num*2 

const listNames = [
    {name: 'Paulo',
    age: 31},
    {name: 'Pietra',
    age: 23},
    {name: 'Amanda',
    age: 39},
    {name: 'Lucas',
    age: 16},
    {name: 'Bruna',
    age: 27}
]



export { exportandoFuncao as novonomefuncexport };
export { multiplicarPorDois as multi };
export { listNames as LN };
