const express = require('express');
const routes = require('./routes/routes')
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({ path: './db/config.env'});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server has started on port ${process.env.PORT}`);
});