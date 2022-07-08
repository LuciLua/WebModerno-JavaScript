const config = require('../knexfile')
const knex = require('knex')(config)

// executa migracao no momento q carregar o backend
// (pode nao ser algo positivo, principalmete se tiver muitos nós)
knex.migrate.latest([config])

// Exporta knex para acessar diretamente no index.js
module.exports = knex