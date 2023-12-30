const {config} = require('dotenv')

config();

module.exports = {
    port: process.env.PORT || 3000,
    userSql: process.env.SQL_USER,
    passwordSql: process.env.SQL_PASSWORD,
    serverSql: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE
};
