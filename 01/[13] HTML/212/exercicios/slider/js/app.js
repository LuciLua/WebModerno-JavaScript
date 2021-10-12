
function mover(e, inicio, fim, passo, callback){
    const novoInicio = inicio - passo
    // passo: de quanto em quanto (px por exemplo)
    if(novoInicio >= fim){
        e.style.left = novoInicio + 'px'
        setTimeout( () => mover(e, novoInicio, fim, passo, callback), 7)
    } else {
        callback()
    }
    
}

const div = document.querySelector('[wm-slider] > div')
// 1ª prop div dentro de wm-slider: primeira elementSlider

div.style.display = 'block'



mover(div, 1500, -1500, 5, () => { console.log('terminou') })