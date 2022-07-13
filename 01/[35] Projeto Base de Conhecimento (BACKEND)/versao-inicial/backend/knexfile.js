const { db } = require('./.env')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

    client: 'postgresql',
    connection: db,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};

