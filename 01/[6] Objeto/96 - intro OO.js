// papel do objeto no país javascript: vice-presidente
// CODIGO NÃO-EXECUTAVEL!

// Paradigma procedural: baseado no procedimento, na função;
// trecho de codigo que você da um nome e para ele e reutiliza em outros lugares
// ------------------------------------------------------------------------
//1. processamento(valor1, valor2,valor3)  => esses valores sao processados por essas funções

processamento(valor1, valor2,valor3)


//------------------------------------------------


//2.  OO => você tem dados e dentro desses dados você tem funções

objeto = {
   valor1,
   valor2,
   valor3,
   processamento(){
     // ...
   }
}

objeto.procesamento()

/**
 * 
 * capsula que agrupa comportamentos e atributos
 * 
 * 
 * -----------------------
 * 
 * oo =>  o mundo é formado por objetos, esses objetos tem atributos e comportamentos e
 *  esses objetos se relacionam um com os outros.
 * 
 * 
 * objeto pode conter outros objetos
 * objeto pode ter relação de parentesco (herança)
 * 
 * 
 * foco passou a ser o objeto e antes era a função
 * 
 * 
 * principios importantes:
 * 
 * 1. Abstração
 * 2. Encapsulamento
 * 3. Herança (prototype)
 * 4. Polimorfismo
 * 
 * 
 * 1. Abstração: pegar objeto do mundo real e tentar traduzir para um objeto do seu sistema
 *  ex.:carro: atributos peso, largura, altura , comprimento, velocidade, ligar, desligar...
 * 
 * detran quer sistema carro:
 * apenas informações pertinentes pro detran, placa, renavam..
 * não precisa se preocupar se o carro tem um motor, se preocupa se o carro tem um dono...
 * -> mas para uma oficina o motor é importante e a placa não...
 * 
 * !!! mesmo objeto sendo ABSTRAIDO/simplificado de formas diferentes para necessidades     
 * diferentes !!!
 * 
 * COMO MAPEAR O MUNDO QUE TEM SEUS OBJETOS E RELAÇÕES, E COMO TRAZER ISSO PARA DENTRO DO
 * SOFTWARE.
 * 
 * 
 * 2. Encapsulamento: Detalhes de implementação escondidos e mostrar para quem 
 * precisa usar o sistema apenas o necessário, simples;
 * 
 *  você sabe que o carro precisa de gasolina
 * mas não precisa saber comos era feita a combustao da gasolina
 * 
 * essa informação (como sera feita combustão..) fica escondida no objeto carro
 * 
 * INTERFACE DE COMUNICAÇÃO ENTRE VOCÊ E O CARRO É IMPORTANTE CONHECER 
 * 
 * Se a interface de comunicação permanece a mesma não preciso me adaptar à mudança 
 * interna de um carro
 * ex: honda 2010 => automatico direção hidraulica
 *     honda 2020 => continua automatico e direção hidraulica
 * 
 * implementação mudou muito (nao necesssariamente quem usa objeto precisa
 * se adaptar). Pois só se eu mudar a interface de comunicação  os usuario precisarão
 * se adaptar.
 * 
 * se eu tenho objeto que joga detalhes para fora: a chance de haver uma alta dependencia   
 * dos objetos é muito grande.
 * 
 * melhor fazer coisas separadas.
 * ruim: alto nivel de acoplamento 
 * 
 * não existe sistema sem acoplamento.
 * 
 * mais importante: se preocupar com a COMUNICAÇÃO ENTRE OBJETOS do que com a implementação 
 * deles.
 * 
 * implementação muda facil. mas se objetos se comunicam de forma excessiva entre si:
 * efeito cascata muito grande...
 * 
 * 
 * 3. Herança (prototype)
 * 
 * reuso: a partir de COMPOSIÇÃO
 * ex: carro: composto por um motor -> motor outro objeto, carro é outro
 * entao nao precisa colocar complexidade motor dentro de carro
 * 
 * posso dizer: carro tem um motor
 * 
 * outra forma de reusar codigo: HERANÇA:
 * 
 * recebe atributos e comportamentos de um objeto pai
 * 1 objeto filho recebe atributos de 1 objeto pai e de 1 objeto mae
 * javascript permite que tenha apenas um único pai
 * 
 * o pai pode ter outro pai....
 * 
 * entao criando uma cadeia de prototipos 
 * 
 * humano é um animal, o ser humano é um mamifero, e mamifero é um animal
 * civic é um carro, ferrari é um carro
 * 
 * hierarquia> mais alto: animal...
 * hierarquia> mais alto: carro...
 * 
 * conceito mais generico, tem um objeto/classe filho, ... etc
 * 
 * PRIORIZE A COMPOSIÇÃO AO INVÉS DE HERANÇA
 * 
 * 
 * 4. Polimorfismo (múltiplas formas)
 * 
 * você tem um: celular
 * celular pode ser varios; (moto g..., sansung, iphone)
 * 
 * consegue usar o cocneito generico de celular
 * uma hora aponta para sansung, outra hora para um iphone
 * 
 * polimorfismo quer dizer multiplas formas. a aprtir de uma variavel
 * mais generico. posso atribuir outros tipos concretos.
 * 
 * 
 * 
 */