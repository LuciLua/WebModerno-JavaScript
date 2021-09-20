import { novonomefuncexport }  from "./modules/meuModulo.js";
import { multi }  from "./modules/meuModulo.js";
import { LN }  from "./modules/meuModulo.js";
import { products }  from "./modules/produtos.js";

console.log(novonomefuncexport());

var num = 2
console.log(`multiplicando o nomero ${num} por 8 =  ${multi(num)}`);

const names = LN.map(names => names.name)
console.log('Nomes ordenados:', names.sort())


const produtos = JSON.parse(products)
console.log(produtos.Produtos.map(p => p.produto))




// so precisa falar que é type: module no arquivo package.json


// sobre o package.json:
/*
-name: define o nome da aplicação ou pacote;
-version: indica a versão atual;
-description: é um resumo da sua aplicação/pacote;
-main: define o ponto de entrada da aplicação (o que vai ser retornado se alguém der um require no nosso pacote);
-private: (true) previne a sua aplicação de ser publicada acidentalmente no npm;
-scripts: define um conjunto de scripts Node para você executar;
-dependencies: define uma lista de pacotes npm instalados como dependências de produção;
-devDependencies: define uma lista de pacotes npm instalados como dependências de desenvolvimento;
-engines: define quais versões de Node este pacote/aplicação funciona;
*/