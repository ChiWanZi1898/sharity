var express = require('express');
var router = express.Router();
var {db} = require('../db');


router.get('/', function (req, res, next) {
  db.temp = JSON.parse(JSON.stringify(db.dataScan));
  res.render('scan');
});

module.exports = router;
