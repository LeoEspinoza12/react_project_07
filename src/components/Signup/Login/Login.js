

import React from 'react'
import Fragment from '../../../UI/Fragment'
import {Link} from 'react-router-dom'
import './Login.css'

const Login = (props) => {


  return (
    <Fragment>

      <div className='container Login'>
        <form action="">
        <h3>Login</h3>
        <div className="form-group">
          <label>Street #</label>
          <input
            type="text" 
            className="form-control" 
            placeholder="Street #" />
        </div>
        <div className="form-group">
          <label>City Name</label>
          <input
            type="text" 
            className="form-control" 
            placeholder="City Name" />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text" 
            className="form-control"
            placeholder="State" />
        </div>
        <Link to='/'>
          <button type="submit" className="btn-sm btn-primary">Submit</button>
        </Link>
        </form>
      </div>
    </Fragment>
  )
}


export default Login