const Message = (input, valid) => {

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

export default Message