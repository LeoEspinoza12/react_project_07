
import React from 'react'
import Fragment from './Fragment'

const InputItems = (props) => {

  let input = null

  switch(props.elementType){
    case('text'):
      input = <Fragment>
                <input 
                  type={props.elementType}
                  placeholder='Enter firstname'
                  className="form-control"
                  name={props.name}
                  value={props.value}
                  onChange={(e)=>props.change(e, props.name)} />
                {
                  props.valid ? null : <small className="form-text text-muted">
                                        Please enter a listed name!
                                       </small>
                }
              
              </Fragment>
      break;
    case ('select'):
      input = <Fragment>
                <select 
                  className="custom-select" 
                  name={props.name}
                  value={props.value}
                  onChange={(e)=>props.change(e, props.name)}>
                    <option value="">- Choose One -</option>
                    <option value="10">$ 10</option>
                    <option value="20">$ 20</option>
                    <option value="50">$ 50</option>
                    <option value="100">$ 100</option>
                    <option value="150">$ 150</option>
                    <option value="200">$ 200</option>
                </select>
            </Fragment>
        break;
    case ('button'):
      input = <button 
                type="submit" 
                className="btn-lg btn-primary"
                disabled={props.disabled}>Add Person</button>
        break;  
    default: return input
  }

  return (
    <Fragment>
      {input}
    </Fragment>
  )
}

export default InputItems