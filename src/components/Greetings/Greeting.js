import React from 'react'
import {Link} from 'react-router-dom'
import Fragment from '../../UI/Fragment'
import './Greeting.css'

const Greeting = () => {

return (
  <Fragment>
    <div className="jumbotron Greeting">
      <h1 className="display-4">Welcome to Language App</h1>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quae qui dolorum deserunt quas reiciendis eaque repellat, cum fugit quia vitae rerum architecto aperiam laborum non sit praesentium beatae quam?</p>
        <hr className="my-4" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam porro tempore ipsam inventore voluptatum saepe facilis vitae, est eaque?</p>
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