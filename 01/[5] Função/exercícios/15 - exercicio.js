function revenda(carro){   
    switch(carro){
        case 'sedans': case 'motocicletas': case 'caminhonetes':
            console.log('tem certeza desde modelo?')
            break
        case 'hatch':
            console.log('compra efetuada com sucesso!')
            break
        default:
            console.log('não temos esse carro aqui!')
    }
}

revenda('hatch')

revenda('sedans')
revenda('motocicletas')
revenda('caminhonetes')

revenda('moto')