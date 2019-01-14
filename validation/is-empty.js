

// this file is designed to validate a value that is not a String 
// and we will use this as a validator of the object that we get.

// const isEmpty = (value) => {
//   return (
//     value === undefined ||
//     value === null ||
//     (typeof value === 'object' && Object.keys(value).lenth === 0) ||
//     (typeof value === 'string' && value.trim().length === 0)
//   )
// }


// this is the refactored value of the code above
// a simplified version
const isEmpty = value => 
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

module.exports = isEmpty;


