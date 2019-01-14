export const GET_TOTALS = 'GET_TOTALS'



export const message = (input, valid) => {

    let message = null
      switch(input.toLowerCase()){
        case('username'):
          if(valid === false){
            message = 'Username must be alphanumeric and more than 6 characters'
          }
            break;
          case('email'):
            if(valid === false){
                message = 'Please enter a valid email'
            }
              break;
          case('password'):
            if(valid === false){
              message = 'Password must be alphanumeric and more than 8 characters'
            }
              break;
            default:
              return null
      }
    return message
}


export const buttonSwitchHandler = (value) => {
  
    const checkifTrue = (val) => {
      return val === true
    }
    return !value.every(checkifTrue)
}

export const updateObject = (oldObject, newObject) => {
  return {
    ...oldObject,
    ...newObject
  }
}

export const updateTotals = (originalObject) => {
  let total = originalObject
  let totalAmount = null
  let persons = null
  for (let key in total) {
    totalAmount += Number(total[key].amount)
    persons += 1
  }

  return { amount: totalAmount, persons: persons }
}