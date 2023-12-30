const sql = require('mssql');
const config = require('../../config/config');


const dbSettings = {
    user: config.userSql,
    password: config.passwordSql,
    server: 'localhost',
    database: config.database,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};

const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection
}

