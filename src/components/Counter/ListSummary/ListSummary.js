import React from 'react'

import Fragment from '../../../UI/Fragment'
import validation from '../../../UI/Validation'

const ListSummary =(props) =>{

  

  
  return (
    <Fragment>
      <div className="row ContriSummary">
        <div className="col-sm-6">
          <p>Total contribution: 
            <b className='float-right'>$ {validation(props.summary.amount, 'amount')}</b></p>
        </div>
        <div className="col-sm-6">
          <p>Total person/s <b className="float-right">{props.summary.persons}</b></p>
        </div>
      </div>
    </Fragment>
  )
}
export default ListSummary
