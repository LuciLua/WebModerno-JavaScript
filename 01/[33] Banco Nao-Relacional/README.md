# Banco Relacional *vs* Não-Relacional

### relacional:

    fluxo
            /----.    ----.
    .---.---.----.----.
        ./---.       ----.
        .----.

persistindo dados, excluindo, alterando => dava muito trabalho

### não-relacional:
mapear estrutura em um unico documento (JSON) num banco nao relacional

    I-------------------------------I
    I          /----.    ----.      I
    I.---.---.----.----.            I
    I      ./---.       ----.       I    => armazena em um unico doc. JSON
    I      .----.                   I       - depois persiste isso nas 20 tabelas
    I-------------------------------I 


#  Banco não-relacional: Mongo

> MONGO É CASE SENSITIVE

**NoSQL = Not Only SQL**

bancos baseados em:

        chave/valor   ex.: redis
        doc.          ex.: Mongo        Fortemente baseado em JSON (no caso do MongoDB)
        grafo         ex.: Neo4j        grafo: vertices ligados por nós
        column        ex.: BigTable

---

## *Escalonamento Vertical* X *Escalonamento Horizontal*

1. *Escalonamento vertical*:
    
- Maquina com armazenamento... Fazendo upgrades na maquina para atendar demandas que se tem dos dados
- Mas tem um limite, que chega rapido

        []  /⧵
        []  || 
        []  ||
        []  ||


2. *Escalonamento Horizontal*

- Consegue-se replicar dados

        [,.] [] [] [.] 
        [] [] [.,] [] 
        [.] [] [] [,] 

- documento => JSON
- DB (database) => Collections => Docs (relativo às tuplas, linhas)
    - [pode ter varios dbs]
- Banco sem schema
- API 

## Comandos Básicos

Versao do mongo
```bash
mongo --version
```

Ajuda do mongo
```bash
mongo --help
```

---

### Dentro do terminal do mongo

Mostrar os bancos disponíveis
```bash
show dbs
```
Mudar para o banco escolhido
```bash
use nomeDoBanco
```
Criar coleção
```bash
db.createCollection('nomeDaColecao') => criar colecao estados
```
Mostrar coleções criadas
```bash
show collections
```
Excluir coleção
```bash
db.nomeDaColecao.drop()
```

### Consultas

#### Consultas #01

Mostrar coleção e seus dados
```bash
db.nomeDaColecao.find()
```

Mostrar coleção e seus dados em um formato mais fácil de ser lido
```bash
db.nomeDaColecao.find().pretty()
```

Pega o primeiro
```bash
db.nomeDaColecao.findOne()
```

Pega específico
```bash
db.nomeDaColecao.findOne({ dado: "ID" })
```

Com parâmetros OR e AND
```bash
db.nomeDaColecao.find({$or: [{ dado: "ID1" }, { dado: "ID2" } ] }).pretty()
```

```bash
db.nomeDaColecao.find({$and: [{ dado: "ID1" }, { dado: "ID2" } ] }).pretty()
```

Se existe atributo "atributo"
```bash
db.nomeDaColecao.find({ atributo: { $exists: true } }).pretty()
```

Buscar registros mas ir pulando
```bash
db.nomeDaColecao.find().skip(2).pretty()
```

Buscar registros com limitação
```bash
db.nomeDaColecao.find().limit(2).pretty()
```

Mostrar quantos registros tem dentro dessa colecao
```bash
db.nomeDaColecao.count()
```

Buscar atributos dentro de um registro (vem o id junto)
```bash
db.nomeDaColecao.find({dado: "ID"}, {name: 1, dado:1})
```

Buscar atributos dentro de um registro (nao vem o id junto)
```bash
db.nomeDaColecao.find({dado: "SP"}, {name: 1, dado:1, _id: 0})
```

Dentro do parametro "atributo" apenas traga atributo "name"
```bash
db.nomeDaColecao.find({dado: "ID"}, {"atributo.name": 1, _id: 0})
```

#### Consultas #02

> no mongo, faz-se as consultas mais complexas com aggregate

> aggregate é como tubulações (pipes) em que os dados passam por filtros (stages).

```bash
db.nomeDaColecao.aggregate()
```

Aggregate: project

> project => filtra atributos de dentro do doc que quero que vá para proxima fase do pipeline de agregacao

```bash
db.nomeDaColecao.aggregate([
    { $project: { name: 1, "atributo.name": 1, _id: 0 } }
])
```

Aggregate: group

> Uso $ antes de atributo.atributo pois o mongo precisa interpretar esse valor, não é simplesmente uma string 

```bash
db.nomeDaColecao.aggregate([
    { $project: {atributo: { $sum: "$maeDoAtributo.atributo" }, dado: 1, _id: 0 } },
    { $group: {_id: null, atributoTotal: { $sum: "$atributo" }} },
    { $project: { _id: 0, atributoTotal: 1  } }
])
```

#### Consultas #03

Aggregate: unwind e match

> unwind => desenrolar/desempacotar as cidades (gere 3 documentos. 1 estado 1 cidade. 1 estado 1 cidade...)

> match => filtra quais documentos quero dentro daminha colecao

> nesse exmplo: project =>  pega so o id da cidade de sorocaba

```bash
db.estados.aggregate([
    { $match: {"cidades.nome": "Sorocaba"} },
    { $unwind: "$cidades" },
    { $match: {"cidades.nome": "Sorocaba"} },
    { $project:  {_id: "$cidades._id"}}
]).pretty()
```
ref: https://www.mongodb.com/docs/manual/reference/operator/aggregation/

---

### Inserindo dados

```bash
db.nomeDaColecao.insert({nome: "Acre", sigla: "AC", regiao: "Norte"})
```
ou 

```bash
db.nomeDaColecao.save({nome: "Alagoas", sigla: "AL", regiao: "Nordeste", populacao: 3322000})
```
### Atualizando dados

Update
```bash
db.nomeDaColecao.update({ sigla: "SP" }, {$set: { populacao: 45340000 }})
```

Update => acrescentar um array
```bash
db.nomeDaColecao.update({ sigla: "AL" }, {$set: { cidades: [{nome: "Sergipe"}] }})
```

Para nao substituir cidades ja existentes, fazer push
```bash
db.nomeDaColecao.update(
    {sigla: "SP"},
    {$push : {cidades: {nome: "Santos", populacao: 433966}}}
)
```

consulta só os nomeDaColecao em que populacao existe
```bash
db.nomeDaColecao.find(
    {populacao: 
        {$exists: true}
    },
    {_id: 0, nome: 1}
)
```