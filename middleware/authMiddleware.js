const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({ path: '../db/config.env' });

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                console.log(err.message);
                res.status(403).send('Invalid Token');
            } else {
                //req.user = user;
                next();
            }
        });
    } else {
        res.status(401).send('No Token has been passed');
    }
}
