var express = require('express');
const {db} = require('../db');
var router = express.Router();

router.get('/:itemID', function (req, res, next) {
  const {itemID} = req.params;
  const {redirect} = req.query;
  res.render('edit', {data: db.temp.find(x => x.id === itemID), redirect: redirect});
});


router.post('/', function (req, res, next) {
  try {
    let data = req.body;
    const itemID = data.itemId;
    const newName = data.name;
    const newType = data.type;
    const newDesc = data.desc;

    db.temp.find(x => x.id === itemID).name = newName;
    db.temp.find(x => x.id === itemID).type = newType;
    db.temp.find(x => x.id === itemID).description = newDesc;

    res.sendStatus(200)
  } catch (e) {
    console.log(e);
    res.sendStatus(500)
  }

});

module.exports = router;
