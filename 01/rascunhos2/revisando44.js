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


const colors = {
    dark: '#33f',
    nebula: '#ff00ff',
    padrao: '#fff',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.card').forEach(e => {
    e.style.background = colors.get('dark')


    if(e.classList.contains('label')){

        
        const h2 = document.createElement('blockquote')
        
        h2.innerHTML = 'ola'
        
        h2.style.width = '100%'
        h2.style.textAlign = 'center'
        h2.style.background = colors.get('sadda')
        
        e.insertBefore(h2, e.childNodes[0])
        console.log(e.childNodes)
    }
})

