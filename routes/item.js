var express = require('express');
const {db} = require('../db');
var router = express.Router();

router.get('/:itemID', function (req, res, next) {
  const {itemID} = req.params;
  const {redirect} = req.query;
  res.render('item', {
    data: db.data.filter(x => x.id === itemID)[0],
    currentUser: db.currentUser,
    redirect: redirect
  });
});

router.post('/:itemID', function (req, res, next) {
  const {itemID} = req.params;
  db.data.find(x => x.id === itemID).requested = true;
  res.sendStatus(200);
});

router.post('/:itemID/accept/:name', function (req, res, next) {
  const {name, itemID} = req.params;
  const item = db.data.find(x => x.id === itemID);
  item.requested_by = [name];
  item.confirmed = true;
  res.sendStatus(200);
});

router.post('/:itemID/decline/:name', function (req, res, next) {
  const {name, itemID} = req.params;
  const item = db.data.find(x => x.id === itemID);
  item.requested_by = item.requested_by.filter(x => x !== name);
  res.sendStatus(200);
});

module.exports = router;
