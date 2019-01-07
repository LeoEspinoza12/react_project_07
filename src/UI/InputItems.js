
import React from 'react'
import Fragment from './Fragment'

const InputItems = (props) => {

  let input = null

  switch(props.elementType){
    case('text'):
      input = <input 
                type={props.elementType}
                  placeholder='Enter firstname'
                    className="form-control"
                      value={props.value}
                        onChange={()=>props.change(props.elementType)} />
      break;
    case ('select'):
      input = <select 
                className="custom-select" 
                  name='select'
                  value={props.value}
                    onChange={()=>props.change(props.elementType)}>
                <option value="">- Choose One -</option>
                <option value="1">10</option>
                <option value="2">20</option>
                <option value="3">50</option>
                <option value="1">100</option>
                <option value="2">150</option>
                <option value="3">200</option>
              </select>
        break;
    case ('button'):
      input = <button type="submit" className="btn-lg btn-primary">Add Person</button>
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