

import React from 'react'
import Fragment from '../../../UI/Fragment'
import './SignupTwo.css'

const SignupTwo = (props) => {


  return (
    <Fragment>
      <div className='container SignupTwo'>
        <div class="form-group">
          <label>Street #</label>
          <input
            type="text" 
            class="form-control" 
            placeholder="Street #" />
        </div>
        <div class="form-group">
          <label>City Name</label>
          <input
            type="text" 
            class="form-control" 
            placeholder="City Name" />
        </div>
        <div class="form-group">
          <label>State</label>
          <input
            type="text" 
            class="form-control"
            placeholder="State" />
        </div>
        <button type="submit" class="btn-sm btn-primary">Submit</button>
      </div>
    </Fragment>
  )
}


export default SignupTwo