var express = require('express');
const {db} = require('../db');
var router = express.Router();

router.get('/:itemID', function (req, res, next) {
  const {itemID} = req.params;
  const {redirect} = req.query;

  res.render('edit', {data: db.data2[itemID], redirect: redirect});
});


router.post('/', function (req, res, next) {
  let data = req.body;
  var itemID = data.itemId;
  var newName = data.name;
  var newType = data.type;
  var newDesc = data.desc;

  var index = itemID - 1
  db.data2[index].name = newName;
  db.data2[index].type = newType;
  db.data2[index].description = newDesc;

  res.render('confirm', {data: db.data2})
});

module.exports = router;
