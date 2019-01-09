import React from 'react'

import Fragment from '../../../UI/Fragment'
import validation from '../../../UI/Validation'
import {connect} from 'react-redux'

const ListSummary =(props) =>{

  
  return (
    <Fragment>
      <div className="row ContriSummary">
        <div className="col-sm-6">
          <p>Total contribution: 
            <b className='float-right'>$ {validation(props.totals.amount, 'amount')}</b></p>
        </div>
        <div className="col-sm-6">
          <p>Total person/s <b className="float-right">
          {validation(props.totals.persons, 'amount')}</b></p>
        </div>
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    totals: state.listItems.totals
  }
}

export default connect(mapStateToProps)(ListSummary)
