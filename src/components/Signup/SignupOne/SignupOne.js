import React from 'react'
import Fragment from '../../../UI/Fragment'
import {Link} from 'react-router-dom'
import './SignupOne.css'

const Signup = (props) => {


  return (
    <Fragment>
      <div className='container SignupOne'>
        <h3>Account Information</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text" 
            className="form-control" 
            placeholder="Enter Username" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email" 
            className="form-control" 
            placeholder="Enter email" />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" 
            className="form-control"
            placeholder="Password" />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
        <Link to='/sign-up/address'>
          <button type="submit" className="btn-sm btn-primary">Next</button>
        </Link>
      </div>
    </Fragment>
  )
}


export default Signup