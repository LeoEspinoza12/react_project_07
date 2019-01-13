
import * as actionType from '../actions/actions'
import {updateObject} from '../../UI/Utils'

const initialState = {
  authToken: false,
  userId: false,
  error: false,
  isSignedUp: false
}

const authLoggedIn = (state, token, userId) => {
  return updateObject( state, { 
    authToken: token,
    userId: userId } );  
}
const authSignedUp = (state, isSignedUp) => {
  return updateObject(state, {
    isSignedUp: isSignedUp,
  });
}
const authLogout = (state) => {
  return updateObject(state, {
    authToken: null,
    userId: null,
    isSignedUp: false,
    error: false

  });
}

const authfail = (state, error) => {
  return updateObject(state, {
    error: error.error.message
  });
}


const authorization = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SIGNEDUP: return authSignedUp(state, action.isSignedUp)
    case actionType.AUTH_SUCCESS: return authLoggedIn(state, action.token, action.userId)
    case actionType.AUTH_LOGOUT: return authLogout(state)
    case actionType.AUTH_FAIL: return authfail(state, action.err)
    default:
      return state
  }
}

export default authorization