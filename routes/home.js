var express = require('express');
var router = express.Router();
var {db} = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', {data: db.data.filter(x => x.from !== db.currentUser), currentUser: db.currentUser});
});

module.exports = router;
