

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

export const signupSuccess = () => {
  return {
    type: actionType.AUTH_SIGNEDUP,
    isSignedUp: true
  }
}

export const authSignUp = (data, signup) => {
  return dispatch => {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAkt1hAjv4eRGPWLydx32VG41FFdddzbzQ'
    
    axios.post(url, data)
    .then(res => {
      if(res.status === 200){
        dispatch(signupSuccess())
      }
      // const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 100)
      // localStorage.setItem('token', res.data.idToken);
      //   localStorage.setItem('expirationDate', expirationDate)
      //     localStorage.setItem('userId', res.data.localId)
            // dispatch(authSuccess(res.data.idToken, res.data.localId))
    })
    .catch(error => {
      dispatch(authFail(error.response.data))
    })
    return true
  }
}


export const login =(email, password)=>{
  //  return dispatch => {
  //   const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAkt1hAjv4eRGPWLydx32VG41FFdddzbzQ'
    
  //   const userdata = {
  //     email: email,
  //     password: password
  //   }

  //   axios.post(url, userdata)
  //   .then(res => {
  //     console.log(res.data)
  //     if(res.status === 200){
  //       const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 100)
  //       localStorage.setItem('token', res.data.idToken);
  //       localStorage.setItem('expirationDate', expirationDate)
  //       localStorage.setItem('userId', res.data.localId)
  //     }
  //     dispatch(authSuccess(res.data.idToken, res.data.localId))
  //   })
  //   .catch(error => {
  //     dispatch(authFail(error.response.data))
  //   })
  //   return true
  // }


   return dispatch => {
    

    const userdata = {
      email: email,
      password: password
    }

    axios.post('/manski/manski', userdata)
    .then(res => {
      console.log(res.data.text)
      if(res.status === 200){
        const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 100)
        localStorage.setItem('token', res.data.idToken);
        localStorage.setItem('expirationDate', expirationDate)
        localStorage.setItem('userId', res.data.localId)
      }
      dispatch(authSuccess(res.data.idToken, res.data.localId))
    })
    .catch(error => {
      dispatch(authFail(error.response.data))
    })
    return true
  }









}