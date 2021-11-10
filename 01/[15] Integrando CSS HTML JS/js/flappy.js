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

// flappy()

function novoElemento(tagName, className){
    const element = document.createElement(tagName)
    element.className = className
    return element
}

// funcao construtora
function Barreira (reversa = false){
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    // normal: borda, corpo (inferior) | reversa: corpo, borda (superior)
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
    
}

function ParDeBarreiras(altura, abertura, positionX){
    this.elemento = novoElemento('div', 'par-de-barreiras')

    // elemento 'par-de-barreiras' tem barreira superior e inferior
    this.superior = new Barreira(true) // corpo, borda
    this.inferior = new Barreira(false) // borda, corpo

    // adiciona dentro de 'par-de-barreiras' o elemento superior
    this.elemento.appendChild(this.superior.elemento)
    // adiciona dentro de 'par-de-barreiras' o elemento inferior
    this.elemento.appendChild(this.inferior.elemento)

    // lembrando: this torna atributo visivel la fora 
    // para tornar privado: basta armazenar em uma const
    this.sortearAbertura = () => {

        // de 0 a 500
        const alturaSuperior = Math.random() * (altura - abertura) 

        // 500 - (alturaSuperior => de 0 a 500)
        const alturaInferior = altura - abertura - alturaSuperior

        // setando altura ao corpo de cada barreira
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    // posição que as barreiras (par-de-barreiras) irão aparecer
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(positionX)
}


// const pb = new ParDeBarreiras(700, 200, 800) // altura do jogo é 700px (ja definida no css, 200 abertura, 400 posição do x)

// document.querySelector('[wm-flappy]').appendChild(pb.elemento)


function Barreiras(altura, largura, abertura, espacoEntreAsBarreiras, notificarPonto){

    // posicao X da primeira barreira vai ser a posicao do jogo (1200px)
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras),
        new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras * 2),
        new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras * 3)
    ]

    // como vai ser o deslocamento das barreiras
    const deslocamento = 3

    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // quando o elemento sair da tela
            if (par.getX() < -par.getLargura()){
                par.setX(par.getX() + espacoEntreAsBarreiras * this.pares.length)
                // sempre gerar barreiras randomicas quando terminar
                par.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = par.getX() + deslocamento >= meio
                && par.getX() < meio

            if (cruzouMeio) notificarPonto()
        })
    }

}

const barreiras = new Barreiras(700, 1200, 200, 400)
const areaDoJogo = document.querySelector('[wm-flappy]')
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

setInterval(() => {
    barreiras.animar()
}, 20);


