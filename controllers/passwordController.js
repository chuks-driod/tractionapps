// var body = require('express-validator')
const { body,validationResult } = require('express-validator');
var Password =  require("../models/passwords");

exports.index = function(req, res) {
    res.render('index')
};

exports.index_post = [

    body('oldPassword').trim().escape(),
    body('password').trim().escape(),
    body('confirmPassword').trim().escape(),

    
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('index', { passwords: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var password = new Password(
                {
                    oldPassword: req.body.oldPassword,
                    password: req.body.password,
                    confirmPassword: req.body.confirmPassword,
                });
            password.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect('https://web.tractionapps.co/#/login');
            });
        }
    }
    
]