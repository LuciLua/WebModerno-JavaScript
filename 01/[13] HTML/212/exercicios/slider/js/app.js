
function mover(e, inicio, fim, passo, callback){
    const novoInicio = inicio - passo
    // passo: de quanto em quanto (px por exemplo)
    if(novoInicio >= fim){
        e.style.left = `${novoInicio}px`
        setTimeout( () => mover(e, novoInicio, fim, passo, callback), 7)
    } else {
        callback()
    }
    
}

function slider(){
    const elements = document.querySelectorAll('[wm-slider] > .elementSlider')
    // node list n é a mesma coisa q array
    // nao tem algumas propriedades que um array tem
    // para transformar NodeList em Array: Array.from(NodeList)
    const slides = Array.from(elements)

    exibirSlide(slides, slides[0])
}

function exibirSlide(slides, slide){
    slide.style.display = 'block'

    // inicio =  tamanho da tela atual pode ser obtido atravez da propriedade: innerWidth
    const inicio = innerWidth

    // começa na beirada e sai ate o final da area q representa .elementSlider
    const fim = -slide.clientWidth

    slide.style.left = `${inicio}px`

    mover(slide, inicio, fim, 5, () => {
        slide.style.display = 'none'
        exibirSlide(slides, getProximo(slides, slide))
    })
}

function getProximo(list, current){
    // proximo
    const i = list.indexOf(current) + 1
    // o prox é menor q o total? sim: ret o atual. nao: ret o primeiro
    return i < list.length ? list[i] : list[0]
}

slider()