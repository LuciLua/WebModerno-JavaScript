// npm init
// wizard para definir como sera o meu arquivo package.json

// outra forma:

// npm init -y
// responde sim para todas as perguntas

// npm i
// para isntalar dependencias
// cria pasta node_modules no msm lugar q vc ta digitando o comando


// npm i --save
// para instalar dependencia e salvar dentro do arquivo package.json a dependencia que vou
// instalar agora

// pra que serve?

// descrever o projeto
// descrever todas as dependencias que o projeto precisa

//----------

// npm i --save axios


// '^' em frente ao numero da versao no package.json
// significa que a versao pode ser atualizada quando mudar pra versao 18, mas
// nao vai mudar o primeiro numero: ^0.2 pode ir para ^0.3 mas nao ^1.3

// ^
// nao muda a versao major

/**
 * Dado um número de versão MAJOR.MINOR.PATCH, incremente a:

versão Maior(MAJOR): quando fizer mudanças incompatíveis na API,

versão Menor(MINOR): quando adicionar funcionalidades mantendo compatibilidade, e

FIX (?).. versão de Correção(PATCH): quando corrigir falhas mantendo compatibilidade.
Rótulos adicionais para pré-lançamento(pre-release) e metadados de construção(build) estão disponíveis como extensão ao formato MAJOR.MINOR.PATCH.
 */

/**
 * quando tem um '~'
 * signifca: aproximado
 * permite que voce pegue versoes que tem um fix diferente
 * permite que apenas o fix seja modificado
 * 
 */


/**
 * npm i --save-dev axios@0.17.1 -E
 * 
 * --save-dev => dependencia que só é necessaria em desenvolvimento, nao necessaria 
 * em producao
 * 
 * nomeDoPacote@versao
 * 
 * -E
 * flag exata, exatamente
 * 
 * 
 */

/**
 * package.lock.json deve ir para repositorio
 * eles descreve de forma precisa a versao que foi baixada
 * 
 * ele serve para definir exatamente qual foi a versao baixada
 * 
 * 
 * pasta funcionarios
 * 
 * DESAFIO:
 * 
 *  ENCONTRAR A MULHER CHINESA COM O MENOR SALARIO
 */