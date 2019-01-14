// this file is to used for validating the user whenever
// any user registers



// validator is a module that helps validate the any value.
// but it only validates String values.
const Validator = require('validator')

// load the is-empty module
const isEmpty = require('./is-empty')

// create a function that we can call in our API routes
module.exports = function validateRegistrationInput(data) {

  let errors = {};

  // check if the value is empty or not.
  // we are using a ternary and this will return 
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';



  // check if the value provided is valid
  if (!Validator.isLength(data.name, {
      min: 3,
      max: 30
    })) {
    errors.name = 'Name must be more than 3 characters';
  }
  // check if the data.name is empty
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }


  // check if email is not empty
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }
  // check if email is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }


  // check if password is not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }
  // check if password is valid (min of 6) (max of 25)
  if (!Validator.isLength(data.password, {
      min: 6,
      max: 30
    })) {
    errors.password = 'Password must be more than 6 characters';
  }


  // check if password2 is not empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required';
  }

  // check if password is the same with password2
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Confirm password must be the same';
  }


  // return the value
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
