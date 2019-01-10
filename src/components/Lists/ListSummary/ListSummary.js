import React from 'react'

import Fragment from '../../../UI/Fragment'
import valid from '../../../UI/Validation/Validation'
import {connect} from 'react-redux'

const ListSummary =(props) =>{

  
  return (
    <Fragment>
      <div className="row ContriSummary">
        <div className="col-sm-6">
          <p>Total contribution: 
            <b className='float-right'>$ {valid(props.totals.amount, 'amount')}</b></p>
        </div>
        <div className="col-sm-6">
          <p>Total person/s <b className="float-right">
          {valid(props.totals.persons, 'amount')}</b></p>
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
