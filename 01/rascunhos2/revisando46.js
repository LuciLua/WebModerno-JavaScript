function novoElemento(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

function fundos(){

  const allFundos = [
    fundo1 = 'linear-gradient(180deg, rgba(131,141,214,1) 0%, rgba(14,85,99,1) 100%)',
    fundo2 =  "linear-gradient(rgba(13, 193, 253, 0.481), rgba(147, 228, 155, 0.37))",
    fundo3 =  "repeating-radial-gradient(ellipse at 80% 50%,rgba(0,0,0,0.5), rgba(0,0,0,0.5) 15px, rgba(255,255,255,0.5) 15px, rgba(255,255,255,0.5) 30px) top left no-repeat, repeating-radial-gradient(ellipse at 20% 50%,rgba(0,0,0,0.5), rgba(0,0,0,0.5) 10px, rgba(255,255,255,0.5) 10px, rgba(255,255,255,0.5) 20px) top left no-repeat yellow",
    fundo4 = 'linear-gradient(357deg, rgba(11,12,13,1) 0%, rgba(2,0,36,1) 27%, rgba(0,212,255,1) 100%)',
    fundo5 = "url('nuvemart.png')",
    fundo6 = '#ff2',
    fundo7 = '#d92d22',
    fundo8 = "linear-gradient(180deg, rgba(240,255,181,1) 0%, rgba(182,249,255,1) 38%, rgba(172,241,255,1) 47%, rgba(0,212,255,1) 100%)",
  ]

  const tela = document.querySelector('[wm-flappy]')
  const seletor = novoElemento("div", "seletorDeFundos")
  tela.appendChild(seletor)

  tela.style.background = allFundos[0]
    
  allFundos.forEach(f => {
    var fundo = novoElemento("div", "fundo")
    seletor.appendChild(fundo)
    fundo.style.background = f
  })

  const fundosLista = document.querySelectorAll('.fundo')
  fundosLista.forEach( fl => { 
      fl.addEventListener('click', function(){
        tela.style.background = fl.style.background
      })
    })
}

fundos()

function Barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira");

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
  this.elemento.appendChild(reversa ? corpo : borda);
  this.elemento.appendChild(reversa ? borda : corpo);

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

function ParDeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras");

  this.superior = new Barreira(true);
  this.inferior = new Barreira(false);

  this.elemento.appendChild(this.superior.elemento);
  this.elemento.appendChild(this.inferior.elemento);

  this.sortearAbertura = () => {
    const alturaSuperior = Math.random() * (altura - abertura);

    const alturaInferior = altura - abertura - alturaSuperior;

    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
  this.setX = (x) => (this.elemento.style.left = `${x}px`);
  this.getLargura = () => this.elemento.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

function Barreiras(
  altura,
  largura,
  abertura,
  espacoEntreAsBarreiras,
  notificarPonto
) {
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura),
    new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras),
    new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras * 2),
    new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras * 3),
  ];

  const deslocamento = 3;

  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espacoEntreAsBarreiras * this.pares.length);
        par.sortearAbertura();
      }
      const meio = largura / 2;
      const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio;

      if (cruzouMeio) {
        notificarPonto();
        const passa = new Audio('win.mp3')
        passa.play()
      }
    });
  };
}

function GameOver() {
  const gameOver = novoElemento("div", "game-over");
  const container = document.querySelector(".container");
  const flappy = document.querySelector("[wm-flappy]");
  const h1 = novoElemento("h1");
  const h2 = novoElemento("h2");

  h1.textContent = "Game Over";
  h2.textContent = "press r for try again";

  gameOver.appendChild(h1);
  gameOver.appendChild(h2);

  this.perdeu = () => {
    container.appendChild(gameOver);
    flappy.classList.add("embacado");

    const over = new Audio('over.mp3')
    over.play()
  };
}

function Passaro(alturaJogo) {
  let voando = false;

  this.elemento = novoElemento("img", "bird");
  this.elemento.src = "passaro.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px"[0]));
  this.setY = (y) => (this.elemento.style.bottom = `${y}px`);

  const inclinado = () => {
    const passaro = document.querySelector('.bird')
    passaro.classList.add('inclinado')
  }

  const normal = () => {
    voando = false
    const passaro = document.querySelector('.bird')
    passaro.classList.remove('inclinado')
  }

  function voar (){
    voando = true
    const audio = new Audio('jump.mp3')
    audio.play()
    inclinado()
  }

  window.onkeydown = (e) => {
    e.key == "r" ? window.location.reload() : voar();
 };

  

  window.onkeyup = (e) => normal();

  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5);
    const alturaMaxima = alturaJogo - this.elemento.clientHeight;

    if (novoY <= 0) {
      this.setY(0);
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima);
    } else {
      this.setY(novoY);
    }
  };

  this.setY(alturaJogo / 2);
}

function Progresso() {
  this.elemento = novoElemento("span", "progresso");
  this.atualizarPontos = (pontos) => {
    this.elemento.innerHTML = pontos;
  };

  this.atualizarPontos(0);
}

function estaoSobrepostos(elementoA, elementoB) {
  const a = elementoA.getBoundingClientRect();
  const b = elementoB.getBoundingClientRect();

  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;

  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

  return horizontal && vertical;
}

function colidiu(passaro, barreiras) {
  let colidiu = false;
  barreiras.pares.forEach((parDeBarreiras) => {
    if (!colidiu) {
      const superior = parDeBarreiras.superior.elemento;
      const inferior = parDeBarreiras.inferior.elemento;

      colidiu =
        estaoSobrepostos(passaro.elemento, superior) ||
        estaoSobrepostos(passaro.elemento, inferior);
    }
  });
  return colidiu;
}

function FlappyBird() {
  let pontos = 0;

  const areaDoJogo = document.querySelector("[wm-flappy]");
  const gameAltura = areaDoJogo.clientHeight;
  const gameLargura = areaDoJogo.clientWidth;

  const progresso = new Progresso();
  const barreiras = new Barreiras(gameAltura, gameLargura, 200, 400, () =>
    progresso.atualizarPontos(++pontos)
  );

  const passaro = new Passaro(gameAltura);

  const gameOver = new GameOver();

  areaDoJogo.appendChild(progresso.elemento);
  areaDoJogo.appendChild(passaro.elemento);
  barreiras.pares.forEach((par) => areaDoJogo.appendChild(par.elemento));

  this.start = () => {
    const temporizador = setInterval(() => {
      barreiras.animar();
      passaro.animar();

      if (colidiu(passaro, barreiras)) {
        gameOver.perdeu();
        clearInterval(temporizador);
      }
    }, 20);
  };
}

new FlappyBird().start();