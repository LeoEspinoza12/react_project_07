import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Fragment from '../../UI/Fragment'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'

import './Lessons.css'

class Lessons extends Component {

  state ={
    language: ['Home', 'Anglais', 'Francais', 'Deutschland', 'Tagalog']
  }

  
  render() {

    return (
      <Fragment>
        <div className="row Lessons">
          <Sidebar lang={this.state.language}/>

          <Switch>
            <Route path={this.props.match.url+'/:lang'} component={Body} />
            <Route path='/lessons' component={Body} />
          </Switch>
          
        </div>
      </Fragment>
    )
  }
}

export default Lessons