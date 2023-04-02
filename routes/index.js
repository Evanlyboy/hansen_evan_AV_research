var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* get the audio component */
router.get('/english', function (req, res, next) {
  res.render('english', { title: 'English' });
});

/* get the video component */
router.get('/japanese', function (req, res, next) {
  res.render('japanese', { title: 'Japanese' });
});

module.exports = router;