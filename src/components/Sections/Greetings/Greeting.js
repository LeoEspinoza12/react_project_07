import React from 'react'
import {Link} from 'react-router-dom'
import Fragment from '../../../UI/Fragment'
import './Greeting.css'

const Greeting = () => {

return (
  <Fragment>
    <div className="jumbotron Greeting">
      <h1 className="display-4">Welcome to My React App</h1>
        <p className="lead intro">This App is a basic React App that I built to exercise my knowledge of this Framework/Library. This App features some of the core features of React like, rendering elements, using JSX to load components, component states and lifecycle hocks, routing, and redux. </p>
        <hr className="my-4" />
        <p>Building an app is not easy. It takes a lot of work, study and practice specially if you are new to the framework or language like me. In the end, what is important is that you have learned a new language that you can use in your future project.</p>
        <hr className="my-4" />
        <p>Thank you for taking time to look at my app.</p>

       <p className="lead">
          <Link 
            className="btn btn-primary btn-md"
            to='/sign-up'>Signup</Link>
          <Link
            className="btn btn-primary btn-md float-right"
            to='/lessons'>Go To Lessons</Link>
        </p>
      </div>
  </Fragment>
)
}

export default Greeting