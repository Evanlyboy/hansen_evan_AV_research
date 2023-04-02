var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* get the audio component */
router.get('/audio', function (req, res, next) {
  res.render('audio', { title: 'Audio' });
});

/* get the video component */
router.get('/video', function (req, res, next) {
  res.render('video', { title: 'Video' });
});

module.exports = router;
