const express = require('express');
const routes = require('./routes/routes')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: './db/config.env'});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
// app.use(cors({
//     origin: true,
//     credentials: true,
//   }));
//   app.options('*', cors({
//     origin: true,
//     credentials: true,
//   }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();
// });

app.use('/api', routes);

//Use npx nodemon to start the server with nodemon
app.listen(process.env.PORT|| 5000, () => {
    console.log(`Server has started on port ${process.env.PORT}`);
});
