let q = new Promise(cp => {
    cp({
        x: 3,
        y: 4
    })
})

q
.then(a => (a.x + a.y))
.then(v => console.log(v))
.catch(erro => console.log('erro: ', erro))