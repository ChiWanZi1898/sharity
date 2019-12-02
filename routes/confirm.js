var express = require('express');
var router = express.Router();
var {db} = require('../db');

router.get('/', function (req, res, next) {
  res.render('confirm', {data: db.temp});
});

router.post('/addNew', function (req, res, next) {
  let selected = JSON.parse(req.body.text);
  for (let i in selected) {
    db.data.push(db.temp.find(x => x.id === selected[i]));
  }
  res.redirect('/post');
});

module.exports = router;
