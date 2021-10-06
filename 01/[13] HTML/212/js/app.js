console.log('ola')

document.querySelectorAll('[wm-nav]').forEach(link => {
    console.log(link)

    const conteudo = document.getElementById('conteudo')
    
    link.onclick = function(e){
        e.preventDefault()

        // requisicao ajax
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text()) // pegar conteudo HTML da pagina que fiz a requisição
            .then(html => conteudo.innerHTML = html)
    }
})

// impede que o navegamento padrão ocorra  

// fetch mais simples, baseado em promise
// Requiisição Ajax

// link.href ou getAttributte

// fetch => requisição ajax em cima do atributo href
