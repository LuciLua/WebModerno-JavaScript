function controller(id){

    var btnPlay = document.querySelector(`[wm-play=${id}] > img`)
    var btnPause = document.querySelector(`[wm-pause=${id}] > img`)
    
    const video = document.getElementById(id)

    video.oncontextmenu = () => false // sem interacao com click

    btnPlay.onclick = () => play()
    btnPause.onclick = () => pause()

    function progress(){
        var progressBar = document.querySelector(`[wm-progresso=${id}] > div`)
        var spanProgress = document.querySelector(`[wm-progressoSpan=${id}]`)
        setInterval( () =>  {
            // var atualPorcentagem = ((video.currentTime*100)/video.duration)
            // tanto faz \/ ou /\
            var atualPorcentagem = ((video.currentTime/video.duration)*100)
            progressBar.style.width = `${atualPorcentagem}%`
            spanProgress.innerHTML = `${atualPorcentagem.toFixed(0)} %`
        }, 50)
    }

    function playActive(){
        btnPause.classList.remove('active')
        btnPlay.classList.add('active')
    }

    function pauseActive(){
        btnPause.classList.add('active')
        btnPlay.classList.remove('active')
    }

    function play(){
        video.play()
        playActive()
        progress()
    }

    function pause(){
        video.pause()
        pauseActive()
    }
}

controller('meuVideo')