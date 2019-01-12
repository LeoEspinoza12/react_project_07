

import * as actionType from './actions'
import axios from 'axios'


export const authFail = (err) => {
  return {
    type: actionType.AUTH_FAIL,
    err: err
  }
}

export const authSuccess = (idToken, localId) => {
  return {
    type: actionType.AUTH_SUCCESS,
    token: idToken,
    userId: localId
  }
}

export const logout = (idToken, localId) => {
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  return { type: actionType.AUTH_LOGOUT }
}


export const authSignup = (data, singin) => {
  return dispatch => {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAkt1hAjv4eRGPWLydx32VG41FFdddzbzQ'
    
    axios.post(url, data)
    .then(res => {
      const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 100)
      localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', res.data.localId)
            dispatch(authSuccess(res.data.idToken, res.data.localId))
    })
    .catch(error => {
      dispatch(authFail(error.response.data))
    })
    return true
  }
}