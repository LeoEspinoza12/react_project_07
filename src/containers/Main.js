import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Fragment from '../UI/Fragment'
import Navbar from '../components/Sections/Navbar/Navbar'
import Greeting from '../components/Sections/Greetings/Greeting'
import SignupOne from '../components/Signup/SignupOne/SignupOne'
import SignupTwo from '../components/Signup/SignupTwo/SignupTwo'
import Lessons from '../components/Lessons/Lessons'
import Counter from '../components/Counter/Counter'

class Main extends Component {

  
  render() {

    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/sign-up/address' component={SignupTwo}/>
          <Route path='/lessons' component={Lessons}/>
          <Route path='/counter' component={Counter}/>
          <Route path='/sign-up' component={SignupOne}/>
          <Route path='/' component={Greeting} />
        </Switch>
      </Fragment>
    )
  }
}

export default Main
