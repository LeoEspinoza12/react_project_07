import * as actionType from '../actions/actions'

const initialState = {
    lists: [],
    totals: [],
}

const authStart = () => {
  console.log('we are in the same pages')
  return true
}




const auth = (state = initialState, action) => {
  
  switch (action.type) {
    case actionType.AUTH_START: return authStart()
    default:
      return state
  }
}

export default auth