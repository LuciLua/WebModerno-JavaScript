// armazena o this numa constante, no momento que  o this aponta pro obj que de fato quero referenciar
// depois uso essa constante para acessar esse this.
//this variando de acordo com quem esta invocando esta função
 function Pessoa() {
     this.idade = 0;

     const self = this
     setInterval( function(){
         self.idade++
         console.log(self.idade)
     }/*.bind(this)*/, 1000) 
     
     //DENTRO DOS PARAMETROS () posso passar uma função anonima, literal e diretamente 
     // .bind para amarrar o this do objeto à chamada dessa função

     // setinterval recebe funcao e intervalo | passado em milisegundos | representa que:
     // a cada X milisegundos a função vai ser disparada novamente. | 1000 ms = 1s

     //dispara outra função a partir de um determinado intervlo que voce passou
 }

// para funcionar: preciso instanciar a partir da função pessoa

new Pessoa  