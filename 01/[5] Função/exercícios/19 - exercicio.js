function produtos(codigo, quantidade){
    const preco = []
    const pedidos = []
    var pagar = 0
    switch (codigo){
        case 100:
            pedidos.push('Cachorro quente')
            preco.push(3)
            pagar = preco*quantidade
            break
        case 200:
            pedidos.push('Hambúrguer Simples')
            preco.push(4)
            pagar = preco*quantidade
            break
        case 300:
            pedidos.push('Cheeseburguer')
            preco.push(5.50)
            pagar = preco*quantidade
            break
        case 400:
            pedidos.push('Bauru')
            preco.push(7.50)
            pagar = preco*quantidade
            break
        case 500:
            pedidos.push('Refrigerante')
            preco.push(3.50)
            pagar = preco*quantidade
            break
        case 600:
            pedidos.push('Suco')
            preco.push(2.80)
            pagar = preco*quantidade
            break
        default:
            console.log('Produto não existe')
    }
    console.log(`Pedido: ${pedidos.join('')}\nPreço: R$${preco.join('')}\nQuantidade: ${quantidade}\nTotal a pagar: R$${pagar}`)
    console.log('---------')
}

produtos(300,2)
produtos(400,4)
produtos(100,6)
produtos(900,6)
