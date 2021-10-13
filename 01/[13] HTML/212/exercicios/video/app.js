const video = document.getElementById('meuVideo')

var btnPlay = document.querySelector('[wm-play] > img')
var btnPause = document.querySelector('[wm-pause] > img')

function controller(){
    btnPlay.onclick = play
    btnPause.onclick = pause
}

function progress(){
    var progressBar = document.querySelector('[wm-progresso] > div')
    setInterval( () =>  {
        var progressTotal = video.duration
        var progressAtual = video.currentTime
        var atualPorcentagem = (progressAtual*100)/progressTotal
        
        progressBar.style.width = `${atualPorcentagem}%`
    }, 10)
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
    progress()
    video.play()
    playActive()
}

function pause(){
    video.pause()
    pauseActive()
}

controller(video)