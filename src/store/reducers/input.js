
const initialValue = {
  names: []
}

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_NAME':

      return state
    case 'ADD_LASTNAME':

      return state
    default:
      return state
  }
}

export default reducer