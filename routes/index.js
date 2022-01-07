var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/v1/auth/reset/61d28e6gab13460003afa6282');
});

module.exports = router;
