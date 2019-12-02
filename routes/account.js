var express = require('express');
const {db} = require('../db');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('account', {users: db.users.filter(x => x.name == db.currentUser)[0]});
});

module.exports = router;
