var express = require('express');
var router = express.Router();

router.get('/:itemID', function(req, res, next) {
  const { itemID } = req.params;
  const data = {
    img: "/images/item1.jpg",
    name: "iPad Pro",
    date:  "Dec, 1, 2019",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate ut pharetra sit amet aliquam id diam. Ac orci phasellus egestas tellus rutrum. Justo nec ultrices dui sapien eget mi proin. Elementum curabitur vitae nunc sed. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Facilisi morbi tempus iaculis urna id volutpat. Vitae turpis massa sed elementum tempus egestas. Amet facilisis magna etiam tempor orci. Aliquam purus sit amet luctus venenatis lectus. Morbi non arcu risus quis. Id nibh tortor id aliquet lectus. Bibendum neque egestas congue quisque. Sed viverra ipsum nunc aliquet."
  };
  res.render('item', {data: data});
});

module.exports = router;
