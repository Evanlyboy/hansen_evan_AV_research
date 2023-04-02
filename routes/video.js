var express = require('express');
var router = express.Router();

// get video component 
router.get('/video', function (req, res, next) {
  res.render('video', { title: 'video Component' });
});

module.exports = router;
