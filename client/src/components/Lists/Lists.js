import React from 'react'
import {connect} from 'react-redux'
import InputArea from './InputArea/InputArea'
import ListSummary from './ListSummary/ListSummary'
import List from './List/List'
import Fragment from '../../UI/Fragment'
import * as actions from '../../store/actions/index'
import './Lists.css'



const Counter = (props) => {


  return (
    <Fragment>
      <div className="container Counter">
        <InputArea 
          submitList={(items)=>props.addList(items)}/>
        <div className="ContriLists">
          <ListSummary />
          <List />
        </div>
      </div>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addList: (listItem) => dispatch(actions.addList(listItem))
  }
}
export default connect(null, mapDispatchToProps)(Counter)