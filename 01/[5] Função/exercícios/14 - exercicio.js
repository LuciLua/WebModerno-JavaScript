function salada(salada){
    switch (salada){
    case 'maçã':
        console.log('Não vendemos essa fruta aqui')
        break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi')
            break
        case 'melancia':
            console.log('aqui está, são 3 reais o quilo')
            break
        default:
            console.log('ocorreu um erro: ', Error);
    }    
}

salada('maçã')
salada('kiwi')
salada('melancia')
salada('manga')
