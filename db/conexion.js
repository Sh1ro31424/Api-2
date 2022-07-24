
const Pool = require('pg').Pool

const dbParams = {
    user: 'ndspwefg',
    host: 'heffalump.db.elephantsql.com',
    database: 'ndspwefg',
    password: 'uH8HCkgHNcI8-dWFseMJW1JLLxiiyeh_',
    port: 5432,
    ssl: { rejectUnauthorized: false }
}

const pool = new Pool({
    user: dbParams.user,
    host: dbParams.host,
    database: dbParams.database,
    password: dbParams.password,
    port: dbParams.port,
    ssl: { rejectUnauthorized: false }
});

//Modularizamos y exportamos unicamente la constantes pool :)
module.exports = {
    pool
};