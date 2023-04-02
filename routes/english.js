var express = require('express');
var router = express.Router();

// get video component 
router.get('/english', function (req, res, next) {
  res.render('english', { title: 'English verison' });
});

module.exports = router;
