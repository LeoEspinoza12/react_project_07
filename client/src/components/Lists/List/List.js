import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import Fragment from '../../../UI/Fragment'
import * as actions from '../../../store/actions/index'
import './List.css'


const Lists =(props)=>{
  
    let listItems = null
    if(props.lists.length === 0){
      listItems = <div className="header">
                      <h1>No contributors</h1>
                      <p>Please enter a person and amount</p>
                    </div>
    } else {
    let list = props.lists.map((list, i) => {
        return  <Fragment key={i}>
                  <li 
                    className="list-group-item"
                    onClick={()=>props.removeItem(i)}>
                    <p>{list.name} 
                      <span>
                        <span>
                          <i>{moment(list.time).format('MMM DD ddd hh a')}</i>
                        </span>
                        <span>
                          <b>{list.amount}</b>
                        </span>
                      </span>
                    </p>
                  </li>
                </Fragment>
        })
      listItems = <ul className="list-group">
                          {list}
                        </ul>
        }

return (
  <Fragment>
      <div className="ContributionList">
        {listItems}
      </div>    
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.listItems.lists,
    totals: state.listItems.totals
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeItem: (i) => { dispatch(actions.removeList(i))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)