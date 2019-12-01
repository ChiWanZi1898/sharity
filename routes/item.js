var express = require('express');
const { db } = require('../db');
var router = express.Router();

router.get('/:itemID', function(req, res, next) {
  const { itemID } = req.params;
  const {redirect} = req.query;
  res.render('item', {data: db.data.filter(x => x.id === itemID)[0], redirect: redirect});
});

module.exports = router;
