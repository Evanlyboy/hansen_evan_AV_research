var express = require('express');
var router = express.Router();

// get audio component 
router.get('/audio', function (req, res, next) {
  res.render('audio', { title: 'audio Component' });
});

module.exports = router;
