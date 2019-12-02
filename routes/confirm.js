var express = require('express');
var router = express.Router();
var {db} = require('../db');

router.get('/', function (req, res, next) {
  res.render('confirm', {data: db.temp});
});

router.post('/addNew', function (req, res, next) {
  let selected = JSON.parse(req.body.text);
  for (let i in selected) {
    let item = JSON.parse(JSON.stringify(db.temp.find(x => x.id === selected[i])));
    item.id = `${db.data.length + 1}`;
    db.data.push(item);
  }
  res.redirect('/post');
});

module.exports = router;
