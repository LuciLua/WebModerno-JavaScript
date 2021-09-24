// middleware pattern (chain of responsability)
const carteiraZerada = (ctx, next) => {
    ctx.barraDeOuro = 0
    ctx.carteira = 0
    console.log('Carteira zerada')
    next()
} 
    
const gastar10reais = (ctx, next) => {
    var num = 10 
    ctx.carteira -= num
    console.log(`gastou ${num} reais!`)
    next()
}
    
const ganhar100reais = (ctx, next) => {
    var num = 100
    ctx.carteira += num
    console.log(`ganhou ${num} reais!`)
    next()
}

const ganharBarraDeOuro = (ctx, next) => {
    var num = 1
    console.log(`ganhou ${num} barra de ouro!`)
    ctx.barraDeOuro++
    next() 
}
        
const exec = (ctx, ...middlewares) =>{
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
    }

const ctx = {}

exec(ctx, carteiraZerada, ganhar100reais, ganhar100reais, gastar10reais, ganharBarraDeOuro, ganharBarraDeOuro)

console.log(ctx)

exec(ctx, ganharBarraDeOuro, ganhar100reais, gastar10reais)
console.log(ctx)