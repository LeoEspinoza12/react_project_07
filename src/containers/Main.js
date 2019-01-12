import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Fragment from '../UI/Fragment'
import Navbar from '../components/Sections/Navbar/Navbar'
import Greeting from '../components/Sections/Greetings/Greeting'
import Signin from '../components/Signup/Signin/Signin'
import Login from '../components/Signup/Login/Login'
import Lessons from '../components/Lessons/Lessons'
import Lists from '../components/Lists/Lists'
import Logout from '../components/Logout/Logout'

class Main extends Component {

  
  render() {

    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/lessons' component={Lessons}/>
          <Route path='/lists' component={Lists}/>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/signup' component={Signin}/>
          <Route path='/' component={Greeting} />
        </Switch>
      </Fragment>
    )
  }
}

export default Main
