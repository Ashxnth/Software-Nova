const client = require('../db/database');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config({ path: '../db/config.env' });
const jwt = require('jsonwebtoken');

//Get all the companies
//POST /api/home
exports.getCompany = (req, res) => {
  let query = {
    text: 'SELECT * FROM "Companies" WHERE user_id = $1;',
    values: [req.body.userId]
  }
  client.query(query, (err, result) => {
    if (err) {
      console.log(err.stack);
      res.status(500).send(err.stack);
    }
    //console.log(result.rows);
    res.status(200).json(result.rows);
  });
}

//Add a new company
//POST /api/home/add
exports.addCompany = (req, res) => {
  const query = {
    text: 'INSERT INTO "Companies"(name, user_id, status, image_url, careers_url) VALUES($1, $2, $3, $4, $5);',
    values: [req.body.name, req.body.userId, req.body.status, req.body.image_url, req.body.careers_url]
  }
  client.query(query, (err, result) => {
    if (err) {
      res.status(400).send(err.stack);
    } else {
      res.status(200).send('Data has been added');
    }
  });
}

//Update a company
//PUT /api/:id
exports.editCompany = (req, res) => {
  const query = {
    text: 'UPDATE "Companies" SET name=$2, status=$3, image_url=$4, careers_url=$5 WHERE id=$1;',
    values: [req.body.id, req.body.name, req.body.status, req.body.image_url, req.body.careers_url]
  }
  client.query(query, (err, result) => {
    if (err) {
      res.status(400).send(err.stack);
    } else {
      res.status(200).send('Data has been updated');
    }
  });
}

//Delete a company
//DELETE /api/:id
exports.deleteCompany = (req, res) => {
  client.query(`DELETE FROM "Companies" WHERE id=${req.params.id};`, (err, result) => {
    if (err) {
      res.status(400).send(err.stack);
    } else {
      res.status(200).send(`Company with ID: ${req.params.id} has been deleted`);
    }
  });
}

//Add a new user
//POST /api/signup
exports.addUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    let query = {
      text: 'INSERT INTO "Users"(username, password) VALUES($1, $2);',
      values: [req.body.username, hashedPassword]
    }
    client.query(query, (err) => {
      if (err) {
        console.log(err.stack);
        res.status(500).send(err.stack);
      } else {
        res.status(200).send('Account has been created');
      }
    });
  } catch (err) {
    res.status(500).send(err.stack);
  }
}

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
      return res.status(401).send('Cannot find user');
    }
    bcrypt.compare(req.body.password, user.password).then((response) => {
      if (response) {
        //Create JSON Web Token since user has been authenticated
        //const user = { name: req.body.username }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
        //res.cookie('jwt', accessToken, { httpOnly: true, maxAge: 60 * 15 });
        res.json({ accessToken: accessToken, userId: user.id });
      } else {
        res.status(403).send('Invalid Password');
      }
    });
  });
}
