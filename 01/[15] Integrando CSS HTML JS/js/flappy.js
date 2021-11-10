function flappy(){

    
    var wmFlappy = document.querySelector('[wm-flappy]')

    function createColum(){
        const createColunas = document.createElement('div')
        createColunas.classList = 'colunas'
        wmFlappy.appendChild(createColunas)
    } 
    
    function removeUltima(){
        const colunas = document.querySelectorAll('.colunas')
        if (colunas.length >= 11)  wmFlappy.removeChild(colunas[0])
    }


    function createObstaculos(){
        const colunas = document.querySelectorAll('.colunas')
        const obstaculos = document.createElement('div')
        
        const obstaculosFisicosCima = document.createElement('div')
        const obstaculosFisicosBaixo = document.createElement('div')

        obstaculos.classList = 'obstaculo'
        obstaculosFisicosCima.classList = 'obs'
        obstaculosFisicosBaixo.classList = 'obs'

        obstaculos.appendChild(obstaculosFisicosCima)
        obstaculos.appendChild(obstaculosFisicosBaixo)

        var random = ((Math.random())*10).toFixed()

        random > 5 && colunas[9] ? colunas[9].appendChild(obstaculos) : console.log('nada')

        console.log(random)

    }

    function cenarioMovimento(){
        setInterval( exec = () => {
            createColum()
            removeUltima()
            createObstaculos()
        }, 500)
    }

    
    function birdDesce(){
        var bird = document.querySelector('.bird')
        var valor = 40
        setInterval( function(){
            valor >= 91 ? valor = 91 : valor++
            bird.style.top = `${valor}%`
        }, 20)

        document.addEventListener("keyup", birdUp)

        
        function birdUp(){
                valor = valor -35
                valor <= 0 ? valor = -4 : valor
                bird.style.top = `${valor}%`
        }
    }





    birdDesce()
    cenarioMovimento()

}

flappy()