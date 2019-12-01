var express = require('express');
const { db } = require('../db');
var router = express.Router();

router.get('/:itemID', function(req, res, next) {
    const { itemID } = req.params;
    const {redirect} = req.query;

    res.render('edit', {data: db.data2[itemID] , redirect: redirect});
});


router.get('/save/:itemID', function(req, res,next){
    var { itemID } = req.params;
    console.log("id given"+itemID )
    var index = itemID-1
    db.data2[index].name ="New Name";
    res.render('confirm', {data: db.data2})
});

module.exports = router;