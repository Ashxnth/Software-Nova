const client = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config({ path: '../db/config.env'});

//Get all the companies
//GET /api
exports.getCompany = (req, res) => {
    client.query('SELECT * FROM "Companies";', (err, result) => {
        if (err) {
          console.log(err.stack)
        }
        console.log(result.rows)
        res.status(200).json(result.rows)
    });
}

//Add a new company
//POST /api
exports.addCompany = (req, res) => {
  const query = {
    text: 'INSERT INTO "Companies"(name, location, image_url, careers_url) VALUES($1, $2, $3, $4);',
    values: [req.body.name, req.body.location, req.body.image_url, req.body.careers_url]
  }
  client.query(query, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log('Data has been added')
      }
  });
}

//Update a company
//PUT /api/:id
exports.editCompany = (req, res) => {
  const query = {
    text: 'UPDATE "Companies" SET name=$2, location=$3, image_url=$4, careers_url=$5 WHERE id=$1;',
    values: [req.body.id, req.body.name, req.body.location, req.body.image_url, req.body.careers_url]
  }
  client.query(query, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log('Data has been updated')
      }
  });
}

//Delete a company
//DELETE /api/:id
exports.deleteCompany = (req,res) => {
  client.query(`DELETE FROM "Companies" WHERE id=${req.params.id};`, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(`Company with ID: ${req.params.id} has been deleted`)
      }
  });
}

/** User Authentication **/
//Add a new user
//POST /api/users
exports.addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const query = {
      text: 'INSERT INTO "Users"(username, password) VALUES($1, $2);',
      values: [req.body.username, hashedPassword]
    }
    client.query(query, (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log('New User has been added');
        }
    });
  } catch (err) {
    res.status(500).send();
  }
}

let tokens = []

//Authenticate user
//POST /api/login
exports.authenticateUser = (req, res) => {
  client.query('SELECT * FROM "Users";', (err, result) => {
    if (err) {
      console.log(err.stack)
    }
    const users = result.rows;
    const user = users.find(user => user.username === req.body.username);
    if (user == null) {
      return res.status(400).send('Cannot find user');
    }
    bcrypt.compare(req.body.password, user.password).then((response) => {
      if (response) {
        //Create JSON Web Token since user has been authenticated
        const user = { name: req.body.username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
        res.json({ accessToken: accessToken })
      } else {
        res.send('Access Denied')
      }
    });
  });
}

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next()
  });
}
