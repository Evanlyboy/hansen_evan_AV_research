var express = require('express');
var router = express.Router();

// get audio component 
router.get('/japanese', function (req, res, next) {
  res.render('japanese', { title: 'Japanese version' });
});

module.exports = router;
