function novoElemento(tagName, className) {
  const element = document.createElement(tagName);
  element.className = className;
  return element;
}

// funcao construtora
function Barreira(reversa = false) {
  this.elemento = novoElemento("div", "barreira");

  const borda = novoElemento("div", "borda");
  const corpo = novoElemento("div", "corpo");
  // normal: borda, corpo (inferior) | reversa: corpo, borda (superior)
  this.elemento.appendChild(reversa ? corpo : borda);
  this.elemento.appendChild(reversa ? borda : corpo);

  this.setAltura = (altura) => (corpo.style.height = `${altura}px`);
}

function ParDeBarreiras(altura, abertura, x) {
  this.elemento = novoElemento("div", "par-de-barreiras");

  // elemento 'par-de-barreiras' tem barreira superior e inferior
  this.superior = new Barreira(true); // corpo, borda
  this.inferior = new Barreira(false); // borda, corpo

  // adiciona dentro de 'par-de-barreiras' o elemento superior
  this.elemento.appendChild(this.superior.elemento);
  // adiciona dentro de 'par-de-barreiras' o elemento inferior
  this.elemento.appendChild(this.inferior.elemento);

  // lembrando: this torna atributo visivel la fora
  // para tornar privado: basta armazenar em uma const
  this.sortearAbertura = () => {
    // de 0 a 500
    const alturaSuperior = Math.random() * (altura - abertura);

    // 500 - (alturaSuperior => de 0 a 500)
    const alturaInferior = altura - abertura - alturaSuperior;

    // setando altura ao corpo de cada barreira
    this.superior.setAltura(alturaSuperior);
    this.inferior.setAltura(alturaInferior);
  };

  // posição que as barreiras (par-de-barreiras) irão aparecer
  this.getX = () => parseInt(this.elemento.style.left.split("px")[0]);
  this.setX = (x) => (this.elemento.style.left = `${x}px`);
  this.getLargura = () => this.elemento.clientWidth;

  this.sortearAbertura();
  this.setX(x);
}

// const pb = new ParDeBarreiras(700, 200, 800) // altura do jogo é 700px (ja definida no css, 200 abertura, 400 posição do x)

// document.querySelector('[wm-flappy]').appendChild(pb.elemento)

function Barreiras(
  altura,
  largura,
  abertura,
  espacoEntreAsBarreiras,
  notificarPonto
) {
  // posicao X da primeira barreira vai ser a posicao do jogo (1200px)
  this.pares = [
    new ParDeBarreiras(altura, abertura, largura),
    new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras),
    new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras * 2),
    new ParDeBarreiras(altura, abertura, largura + espacoEntreAsBarreiras * 3),
  ];

  // como vai ser o deslocamento das barreiras
  const deslocamento = 3;

  this.animar = () => {
    this.pares.forEach((par) => {
      par.setX(par.getX() - deslocamento);

      // quando o elemento sair da tela
      if (par.getX() < -par.getLargura()) {
        par.setX(par.getX() + espacoEntreAsBarreiras * this.pares.length);
        // sempre gerar barreiras randomicas quando terminar
        par.sortearAbertura();
      }

      const meio = largura / 2;
      const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio;

      if (cruzouMeio) notificarPonto();
    });
  };
}

function Passaro(alturaJogo) {
  let voando = false;

  this.elemento = novoElemento("img", "bird");
  this.elemento.src = "imgs/passaro.png";

  this.getY = () => parseInt(this.elemento.style.bottom.split("px"[0]));
  this.setY = (y) => (this.elemento.style.bottom = `${y}px`);

  window.onkeydown = (e) => (voando = true);
  window.onkeyup = (e) => (voando = false);

  this.animar = () => {
    // quanto sobe, quanto cai
    const novoY = this.getY() + (voando ? 8 : -5);

    // no maximo encostar ate o teto
    const alturaMaxima = alturaJogo - this.elemento.clientHeight;

    // se ta no chao
    if (novoY <= 0) {
      this.setY(0);
    }
    // nao passa do ceu
    else if (novoY >= alturaMaxima) {
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
  // retangulo associado ao elemento a
  const a = elementoA.getBoundingClientRect();
  const b = elementoB.getBoundingClientRect();

  // distancia do left a ate o comprimento de a = lado direito de a
  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;

  // possibilidade de haver colisao:
  // quando o lado direito de A é maior q o lado esquerdo de B
  // quando o lado direito de B é maior q o lado esquerdo de A

  // se houver colisao tanto vertical quanto horizontal
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;

  // se houver colisao vai dar true
  return horizontal && vertical;
}

function colidiu(passaro, barreiras) {
  let colidiu = false;
  barreiras.pares.forEach((parDeBarreiras) => {
    // so entra neste teste se a colisao tiver false (se nao tiver colidido ainda)
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

  areaDoJogo.appendChild(progresso.elemento);
  areaDoJogo.appendChild(passaro.elemento);
  barreiras.pares.forEach((par) => areaDoJogo.appendChild(par.elemento));

  this.start = () => {
    // loop do jogo
    const temporizador = setInterval(() => {
      barreiras.animar();
      passaro.animar();

      if (colidiu(passaro, barreiras)) {
        clearInterval(temporizador);
      }
    }, 20);
  };
}

new FlappyBird().start();
