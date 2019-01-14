// this file is to used for validating the user whenever
// any user registers



// validator is a module that helps validate the any value.
// but it only validates String values.
const Validator = require('validator')

// load the is-empty module
const isEmpty = require('./is-empty')

// create a function that we can call in our API routes
module.exports = function validateLoginInput(data) {

  let errors = {};

  // check if the value is empty or not.
  // we are using a ternary and this will return 
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';



  // check if email is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  // check if email is not empty
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }


  // check if password is not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }



  // return the value
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
