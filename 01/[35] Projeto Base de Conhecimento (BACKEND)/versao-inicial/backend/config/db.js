const config = require('../knexfile')
const knex = require('knex')(config)

// Exporta knex para acessar diretamente no index.js
module.exports = knex