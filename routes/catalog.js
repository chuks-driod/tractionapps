var express = require('express');
var router = express.Router();

// Require controller modules.
var password_instance_controller = require('../controllers/passwordController')
/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', password_instance_controller.index);


// POST request to update BookInstance.
router.post('/', password_instance_controller.index_post);

module.exports = router;
