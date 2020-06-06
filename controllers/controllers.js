const client = require('../db/database');

//GET Companies
exports.getCompany = () => {
    client.query('SELECT * FROM "Companies";', (err, res) => {
        if (err) {
          console.log(err.stack)
        } else {
          console.log(res.rows)
          return res.rows;
        }
    });
}

//POST Company
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

//PUT Company
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

//DELETE Company
exports.deleteCompany = (req,res) => {
  client.query(`DELETE FROM "Companies" WHERE id=${req.params.id};`, (err, res) => {
      if (err) {
        console.log(err.stack)
      } else {
        console.log(`Company with ID: ${req.params.id} has been deleted`)
      }
  });
}