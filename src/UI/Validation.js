
import numeral from 'numeral'

const Validation = (value, inputItem) => {
  
  let valid = null
  
  switch(inputItem.toLowerCase()){
    case('username'):
      const usernamePattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
      value === '' ? valid=null : valid=usernamePattern.test(value)
        break;
    case('email'):
      const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      value === '' ? valid = null : valid = emailPattern.test(value)
        break;
    case('password'):
      const passwordPattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/;
      value === '' ? valid=null : valid=passwordPattern.test(value)
        break;
    case ('nameentered'):
      const namePattern = /[\w\s]+/
      value === '' || value.length <= 1 ? valid=false : valid=namePattern.test(value)
        break;
    case ('amountentered'):
      value.length <= 1 ? valid=false : valid=true
        break;
    case ('amount'):
      let val = String(value)
      val.length >= 4 ? valid=numeral(val).format('0,0') : valid=val
      break;
    default: 
      return null
  }
  return valid
}

export default Validation