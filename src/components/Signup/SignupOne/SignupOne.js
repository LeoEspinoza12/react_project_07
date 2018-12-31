import React from 'react'
import Fragment from '../../../UI/Fragment'
import './SignupOne.css'

const Signup = (props) => {


  return (
    <Fragment>
      <div className='container SignupOne'>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text" 
            class="form-control" 
            placeholder="Enter Username" />
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email" 
            class="form-control" 
            placeholder="Enter email" />
          <small class="form-text text-muted">
            We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password" 
            class="form-control"
            placeholder="Password" />
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input" />
          <label class="form-check-label">Check me out</label>
        </div>
        <button type="submit" class="btn-sm btn-primary">Next</button>
      </div>
    </Fragment>
  )
}


export default Signup