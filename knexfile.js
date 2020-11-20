// Update with your config settings.
const knex = require('knex')({
  client: 'pg',
  connection: {
      host: 'localhost',
      database: 'targets',
      tableName: 'poop'
  },
  development: {
      seeds: {
          directory:'./db/seeds'
      }
  } 
});

// knexfile.js
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/targets',
    seeds: {
    directory: __dirname + '/db/seeds/development'
    }
  }
};

