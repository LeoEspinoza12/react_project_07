import React, { Component } from 'react'
import Fragment from '../UI/Fragment'

// import Navbar from '../components/Navbar/Navbar'
// import Greeting from '../components/Greetings/Greeting'
// import SignupOne from '../components/Signup/SignupOne/SignupOne'
// import SignupTwo from '../components/Signup/SignupTwo/SignupTwo'
import Lessons from '../components/Lessons/Lessons'

class Main extends Component {


  render() {
    return (
      <Fragment>
        {/* <Navbar /> */}
        {/* <Greeting /> */}
        {/* <SignupOne /> */}
        {/* <SignupTwo /> */}
        <Lessons />
      </Fragment>
    )
  }
}

export default Main
