const elements = document.querySelectorAll('[box] > .card') 
const slides = Array.from(elements)

var slideAtual = [slides[0]]
var numero = 0

function preencher(){
    slideAtual.map(e => e.style.background = '#222')
}

function mudarCor(){
    if (numero < slides.length) preencher()
    else {
        numero = 0
        slideAtual = [slides[0]]
        preencher()
    }
}

function corNormal(){
    slides.forEach(e => {
        e.style.background = 'rgb(48, 51, 55)'
    })
} 
    
function getNext(){
    numero++
    slideAtual = [slides[numero]] 
}
    
function fazAcontecer(){
    setInterval( () => {

        mudarCor()
        getNext()

        setTimeout( () => {
            corNormal()
        }, 500 )
        // dura 200 ms a cor

    }, 300 )
}

fazAcontecer()
    
