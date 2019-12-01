var express = require('express');
const { db } = require('../db');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('post', {
    data: db.data.filter(x => x.from === db.currentUser),
    currentUser: db.currentUser
  });
});

module.exports = router;
