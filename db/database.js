const { Client } = require('pg');
const dotenv = require('dotenv').config({ path: './db/config.env'});

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
client.connect(err => {
    if (err) {
        console.error('Connection Error:', err.stack)
    } else {
        console.log('Database is now Connected!')
    }
});

module.exports = client;