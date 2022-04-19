# About

Angular é uma plataforma e framework para construção da interface de aplicações usando HTML, CSS e, principalmente, JavaScript, criada pelos desenvolvedores da Google.

Ele possui alguns elementos básicos que tornam essa construção interessante.

Dentre os principais, podemos destacar os componentes, templates, diretivas, roteamento, módulos, serviços, injeção de dependências e ferramentas de infraestrutura que automatizam tarefas, como a de executar os testes unitários de uma aplicação.

Angular nos ajuda a criar Single-Page Applications com uma qualidade e produtividade surpeendente!

Alguns outros pontos dessa plataforma que merecem destaque são o fato de que ela é open source, possui uma grande comunidade, existem várias empresas utilizando e tem muito material de estudo para quem deseja se aperfeiçoar.

Fonte: https://blog.algaworks.com/o-que-e-angular/

---

### Visao geral

- Arvore de componentes

### Conceitos gerais

##### <u>Inicialização da APP</u>

- main.ts (primeiro arquivos que é chamado)

- main.ts chama o modulo AppModule

- Nível a mais de encapsulamento. Aplicacao em Angular é modularizada, possibilita usar por exemplo componentes que serão visíveis apenas dentro de um módulo

- Quando o AppModule é carregado o primeiro componente que será chamado é o AppComponent

- AppComponent: pode ir chamando varios outros componentes

##### <u>O que é um componente Angular?</u>

- Componente visual (HTML, CSS, TS)

```md
home.component.html && home.component.css && home.component.ts
```

- Pode encapsular as tecnologias em uma tag só `<app-home></app-home>`

> #### Exemplo trecho Angular Component

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fenix-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
```

##### <u>Organização Usando Módulo</u>

- Organiza a aplicação em componentes e em módulos

##### <u>Anatomia do Módulo</u>

- Cada módulo tem vários atributos

<u>Atributos:</u>

<dl>
    <dt>1. Bootstrap</dt>
    <dt>2. Declarations</dt>
    <dt>3. Imports</dt>
    <dt>4. Exports</dt>
    <dt>5. Providers</dt>
</dl>

| <u>AppModule</u> |     |
| :--------------: | :-: |

|<i>BOOTSTRAP [^1]</i>
|DECLARATIONS [^2]|IMPORTS[^3]

|  <u>XModule</u>   |               |
| :---------------: | :-----------: |
| DECLARATIONS [^2] |  IMPORTS[^3]  |
|    EXPORTS[^4]    | PROVIDERS[^5] |

|  <u>YModule</u>   |               |
| :---------------: | :-----------: |
| DECLARATIONS [^2] |  IMPORTS[^3]  |
|    EXPORTS[^4]    | PROVIDERS[^5] |

|  <u>ZModule</u>   |               |
| :---------------: | :-----------: |
| DECLARATIONS [^2] |  IMPORTS[^3]  |
|    EXPORTS[^4]    | PROVIDERS[^5] |

[^1]: Bootstrap: Define o componente que será carregado naquele módulo. Seu uso é necessário apenas no módulo AppModule (que é o principal da aplicacao) - App Component.
[^2]: Declarations: Vai declarar todos os componentes, diretivas e pipes que fazem parte daquele módulo - Componentes, Diretivas e Pipes
[^3]: Imports: Importar outros módulos, um modulo ppode depender de outro modulo - Modulo A, Modulo B, Modulo C
[^4]: Exports: São colocados todos os componentes, diretivas e pipes que serão visíveis para fora do módulos - Componentes, Diretivas e Pipes
[^5]: Providers: Declara os services - Service A, Service B, Service C,

---

### Elementos do Angular

<dl>
  <dt>
    Componentes
  </dt>
  <dd>
    (HTML, CSS TS => home.component.html, home.component.css, home.component.ts)

    <app-home> </app-home>

  </dd>
  <dt>
    Diretivas
  </dt>
    <dd>
      Altera a <u>aparência</u> e o <u>comportamento</u> de um elemento, componente ou outra diretiva.

```ts
@Directive({
  selector: "[appRed]",
})
export class RedDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "#e35e6b";
  }
}
```

```html
<i class="material-icons v-middle"> favorite </i>
```

-> ♡

```html
<i class="material-icons v-middle" appRed> favorite </i>
```

-> ❤

> @Directive => Decorator (Padrão de projeto para evitar herança e trabalhar com composição, para definir que aquela classe seja responsável por alguma coisa naquele componente)

> Diretiva de atributo consegue tanto alterar estilo como também o comportamento

##### <u>Diretiva estrutural</u>

Altera o alyout <u>adicionando</u> e <u>removendo</u> elementos da <u>DOM</u>(Document Object Model).

> Diferença (visualmente) entre diretiva estrutural para uma de atributo é o asterisco na frente

```html
<form *ngIf="product" class="product-form"></form>
```

```html
<ul>
  <li *ngFor="let product of products">{{ product.name }}</li>
</ul>
```

##### <u>Propriedade Binding</u>

###### <u>Binding de tributo</u>

> Precisa haver comunicação entre o TS file (codigo) e o template (HTML file). Um das formas é o <u>binding de atributo</u>

```html
<table [dataSource]="products"></table>
```

> Se nao colocar entre colchetes, interpreta como string, com colchete: olha pro componente procurando atributo com esse mesmo nome.

> Forma que se tem parar fazer uma ligação: usando colchetes associado a um atributo

> [dataDource] do HTML file apontando para products no TSFile

```ts
@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];
}
```

###### <u>Binding de Evento</u>

> Para ligar evento em um método: usa-se a sintaxe dos <u>parênteses</u>

```html
<button mat-raised-button (click)="createProduct()" color="primary">
  Salvar
</button>
```

> (click)="createProduct()" no HTML file com o createProduct(): void { } no TS File

```ts
@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  createProduct(): void {
    // ...
  }
}
```

#### Resumindo bindings:

- de atributos usa-se <b><u>COLCHETES</b></u>
- de eventos usa-se <b><u>PARÊNTESES</b></u>

---

### 🥾 One Way Data Binding

> (bataBinding de uma unica direcao)

```html
<input [value]="nome" />
```

```ts
nome: string;
```

> Componente dentro do TS muda-se nome para "Rebeca" então é feita a alteração no componente visual HTML.

> TS > > HTML (Sentido único)

### 👣 <u>Two</u> Way Data Binding

> (bataBinding de duas direcoes)

```html
<input [(ngModel)]="nome" />
```

```ts
nome: string;
```

> TS > > HTML && HTML > > TS (Duplo sentido)

> Para usa-la: deve-se usar <b>[( colchetes e parenteses )] </b>

  </dd>
  <dt>
    Rotas (Angular Router)
  </dt>
  <dd>

> Mapeamento entre a URL e mapear para o componente

```bash
/home [Comp. Home]
```

```bash
/produto [Comp Prod.]
```

```bash
/usuário [Comp. Usuário]
```

> Router outlet: vai injetar dentro dele outros componentes de acordo com a navegação que foi feita

> 🖱: /Home => Router Outlet[Comp. Home]

> 🖱: /produto => Router Outlet[Comp. Prod]

> 🖱: /usuario => Router Outlet[Comp. Usuário]

  </dd>
  <dt>
    Pipes
  </dt>
  <dd>

> Processamentos em cima de variáveis

> Vai interpretar o que estiver dentro das "double-mustaches": {{}}

> Pipe para fazer formatação de um dado, para colocar simbolo do real por exemplo

```html
<p>O vencimento é {{ produto.vencimento | date }}</p>
```

> Alguns pipes recebem parâmetros

```html
<td mat-cell *matCellDef="let product">{{ product.price | moeda: 'BRL' }}</td>
```

> Consegue-se ter também uma cadeia de processamento/pipes

```html
<p>
  O vencimento do produto é {{ produto.vencimento | date: 'fullDate' | uppercase
  }}
</p>
```

  </dd>
  <dt>
    Observables
  </dt>
  <dd>

> Angular usa ReactiveX (Framework)

> Programação reativa: que não fica chamando o tempo todo, é necessário acontecer alguma coisa, como um evento, para o codigo ser executado

```ts
import { Observable } from "rxjs";
```

#### O Padrão Observer

> O padrao de projeto mais utilizado na web

> Padrão orientado a <b>Evento</b>!

> Padrões dos GoF

> [Subject] => Quem tem a capacidade de monitorar e detectar quando o evento acontece

> [[Observer]][[Observer]][[Observer]][[Observer]] => Código ou as pessoas interessadas em determinado evento

> [[Observer]] => Cada observer precisa se registrar no [subject] dizendo que ele é interessado no evento

> [Observer]<=(3)notifica= [subject] =(1)detecta=> [evento] <=(2)registrar= [observer]

> Ex: evento de compra. observador para manda msg pro sistema, outro para dar baixa do estoque... Tudo isso é ativado no evento venda. Subject quem monitora evento compra e o observador por exemplo fala pro usuario que a compra foi finalizada.

#### Entendendo Observables

##### <u>callbacks</u>

Funções que recebem como parâmetro outras funções também sao chamadas de callbacks

callbacks => surgiu Promises

##### <u>Promises</u>

Capacidade de encadear varias chamadas sem aninhamento causada pelas callbacks

problemas: executa uma unica vez, não reutilizavel

promises => surgiu Observables

##### <u>Observables</u>

Encapsula questão do padrão observer
Padrão observer é a base da programação reativa

✅ Reusável

✅ Stream dados

✅ Operadores

```ts
criarNoBackend(produto: Produto): Observable<Produto> {
  return this.http.post<Produto>(this.url, produto);
}
```

```ts
criarProduto(): void {
  this.criarNoBackend(this.produto).subscribe(() => {
    this.exibirMensagem("Salvo com sucesso!");
  });
}
```

  </dd>
  <dt>
    Services
  </dt>
  <dd>

> São classes que têm como objetivo <b>organizar</b> e <b>compartilhar</b> <u>métodos</u> e <u>dados</u> entre <b>componentes</b>.

> Pode-se usar services dentro de componentes e de diretivas. ideia: separar as responsabilidades

> Responsabilidade de mostrar algo visual: componente.

> Services na responsabilidade da parte nao visual.

> Viabilizar compartilhamento entre componentes.

#### Motivação para o Service

> Deve-se ter lógicas relacionadas com a parte visual

> Service: une as lógicas duplicadas usadas por mais de um componente por exemplo

> Services tem que ter coerência de estar juntos

> Quando não há coerência, criar mais services

> Para deixar componente mais focado na parte visual

```bash
ng g s services/product
```

> Criação do service vai ser gerenciada pelo angular

> g: generate s:service c:component

```ts
@Injectable({
  providedIn: "root",
})
export class ProductService {
  // ...
}
```

> No lugar do "root" pode-se colocar referencia para um módulo

> @Injectable: vai ser possivel ser injetada em outras classes

> para usar service dentro do componente: a partir da injecao de dependencia

> Só exite um injetor raiz da aplicação

> sempre que eu injetar um produto service dentro de um componente ou diretiva, o angular vai devolver a mesma instancia

> instancia sempre sera devolvida quando eu pedir

#### Injeção de <b><u>Dependências</u></b>

É um padrão no qual a classe recebe as <b>dependencias</b> de uma <b>fonte externa</b> ao invez de criar por conta prórpia.

###### SEM Injeção de Dependencia
>  Ex.: 
> Carro foi responsável por criar uma instancia de motor

classe Carro
```ts
class Carro {
  motor: Motor

  constructor(){
    this.motor = new Motor()
  }
}
```
classe Motor
```ts
class Motor {
  cilindrada: number

  constructor(cilindrada: number) {
      this.cilindrada = cilindrada
    }
  }
```

> Instanciei um obj motor e atribui a variavel dentro de carro. Então quando o carro for instanciado ele terá automaticamente um motor. Carro foi responsável por criar instancia de motor 

> ### Carro => Motor
###### COM Injeção de Dependencia

classe Carro
```ts
class Carro {
  motor: Motor

  constructor(motor: Motor){
    this.motor = motor
  }
}
```
classe Motor
```ts
class Motor {
  cilindrada: number

  constructor(cilindrada: number) {
      this.cilindrada = cilindrada
    }
  }
```
> Passando motor (ja construido) como parametro para o carro

> Fonte externa (fábrica) ja passa motor construido para dentro do carro

> Frameworks que ajudam no processo de injecao de dependencias

> ### Motor => Carro

---

- Angular Framework Instancia uma classe e cria uma instância, passa o service, criando um componente

- Para cada tag vai ter uma instancia

- providedIn: "root" é um alias para AppModule, ele é um Injector.

### Singletons

Apenas uma uncia instancia dentro do escopo de um Injector 

Services são <b>singletons</b> dentro do escopo de um <b>injector</b>

1. ModuleInjector: @NgModule @Injectable
2. ElementInjector: @Directive @Component

  </dd>
</dl>
