function locationHashChanged(e){


    // e (evento) . oldURL e newURL => valores fixos
    const newURL = e.newURL.split('#')[1] // pega url nova depois do #
    const oldURL = e.oldURL.split('#')[1] // pega url antiga depois do #

    const ativo = document.querySelector(`nav.menu > ul li a[href="#${newURL}"]`)
    const desativado = document.querySelector(`nav.menu > ul li a[href="#${oldURL}"]`)

    ativo && ativo.classList.add('active')
    desativado && desativado.classList.remove('active')

    // && => para checar se 'ativo' é diferente de null/undefined e para  checar 'ativo'.classList.remove('active')! Se não fizessemos a primeira checagem e 'ativo' fosse null ou undefined, a segunda checagem poderia gerar um erro!
}
  
window.onhashchange = locationHashChanged;