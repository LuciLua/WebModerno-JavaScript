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
