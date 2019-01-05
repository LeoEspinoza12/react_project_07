import React from 'react'
import Fragment from '../../../UI/Fragment'
import message from '../../../UI/Message'
import './Input.css'

const Input = (props) => {
  

  
  let inputElement = (
    <Fragment>
      <label>{props.title}</label>
          <input
            {...props.elementConfig}
            name={props.title}
            required={props.shouldValidate.required}        
            className="form-control"
            value={props.value}
            onChange={(e)=>props.change(e, props.title)} />
            <small className="form-text text-muted">
              {message(props.title, props.isValid)}
            </small>
          
    </Fragment>
  );

  return (
    <Fragment>
      <div className="form-group">
        {inputElement}
      </div>
    </Fragment>
  )
}

export default Input