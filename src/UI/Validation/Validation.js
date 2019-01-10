
import numeral from 'numeral'
import * as validation from './Action'

const username = (val) => {
  const usernamePattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/;
  return val === '' ? null : usernamePattern.test(val)
}

const email = (val) => {
  const emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return val === '' ? null : emailPattern.test(val)
}

const password = (val) => {
  const passwordPattern = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/;
  return val === '' ? null : passwordPattern.test(val)
}

const nameEntered = (val) => {
  const namePattern = /[\w\s]+/
  return val === '' || val.length <= 1 ? false : namePattern.test(val)
} 

const amountEntered = (val) => {
  return val.length <= 1 ? false : true
}

const amount = (val) => {
  let value = String(val)
  return value ? numeral(val).format('0,0') : val
}

const sampState = (val) => {
  const entry = val
  for (let key in entry) {
    if (key === 'nameEntered' || key === 'amountEntered') {
      entry[key].value = ''
      entry[key].valid = false
    } else {
      entry.disabled = true
    }
  }
  return entry
}

const valid = (value, inputItem) => {
  switch(inputItem.toUpperCase()){
    case(validation.USERNAME): return username(value)
    case(validation.EMAIL): return email(value)
    case(validation.PASSWORD): return password(value)
    case(validation.NAMEENTERED): return nameEntered(value)
    case(validation.AMOUNTENTERED): return amountEntered(value)
    case(validation.AMOUNT): return amount(value)
    case(validation.SAMPSTATE): return sampState(value)
    default: 
      return null
  }
}

export default valid

