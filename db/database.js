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
        console.error('Connection Error:', err.stack);
    } else {
        console.log('Database is now Connected!');
        client.query('CREATE TABLE "Users"(id serial PRIMARY KEY, username TEXT NOT NULL, password TEXT NOT NULL, UNIQUE(username));', (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log('Users Table has been created');
            }
        });
        client.query('CREATE TABLE "Companies"(id serial PRIMARY KEY, user_id INTEGER NOT NULL, name TEXT NOT NULL, status TEXT, image_url TEXT, careers_url TEXT, FOREIGN KEY (user_id) REFERENCES "Users"(id) ON DELETE CASCADE);', (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log('Companies Table has been created');
            }
        });
    }
});

module.exports = client;
