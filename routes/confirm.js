var express = require('express');
var router = express.Router();
var {db} = require('../db');

router.get('/', function (req, res, next) {
  res.render('confirm', {data: db.data2});
});

router.post('/addNew', function(req, res, next) {
  let data = JSON.parse(req.body.text);
  db.data3 = [...db.data2];
  for (let i in data) {
    db.data3[i].selected = "True";
  }
  res.render('post', db.data3);
});

module.exports = router;
