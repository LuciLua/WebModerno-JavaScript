// middleware pattern (chain of responsability)

const passo1 = (ctx, next) => {/// ctx (contexto): obj que vai passando de 1 passo p outro
// de um middleware para outro

    ctx.valor1 = 'mid1'
    next()

} 


const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'


// ... => operador rest

const exec = (ctx, ...middlewares) =>{
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](ctx, () => execPasso(indice + 1)) // vai chamando os mid pelo indice. ate que o indice seja igual ao comprimento do array de middlewares (middlewares.length)
    }
    execPasso(0) // 0 como indice
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//no express a funcao middleware tem 3 parametros
// requisicao, resposta, next 
// (request, response, next)

// padrao de projeto: solucao para um problema recorrente 