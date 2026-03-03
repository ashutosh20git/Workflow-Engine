const {POOL} = require("pg");
const pool = new POOL({
    connectionString: process.env.DATABASE.URL;
});
module.exports = pool;