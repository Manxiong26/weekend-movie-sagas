const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // query to get all genres
  let sqlText = `SELECT * FROM genres ORDER BY name ASC;`;
  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error fetching genre', error);
      res.sendStatus(500)
    })
});

module.exports = router;