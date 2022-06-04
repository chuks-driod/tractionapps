var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PasswordSchema = new Schema(
  {
    email: {type: String, required: true},
    password: {type: String, required: true}
  }
);

// // Virtual for book's URL
// PasswordSchema
// .virtual('url')
// .get(function () {
//   return '/v1/auth/reset/61d63ae96e18b600039f2fb8';
// });


//Export model
module.exports = mongoose.model('Tractionapps', PasswordSchema);
