import React from 'react'
import Fragment from '../../UI/Fragment'
import './Greeting.css'

const Greeting = () => {

return (
  <Fragment>
    <div className="jumbotron Greeting">
      <h1 class="display-4">Welcome to your App</h1>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quae qui dolorum deserunt quas reiciendis eaque repellat, cum fugit quia vitae rerum architecto aperiam laborum non sit praesentium beatae quam?</p>
        <hr class="my-4" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aperiam porro tempore ipsam inventore voluptatum saepe facilis vitae, est eaque?</p>
        <p class="lead">
          <a class="btn btn-primary btn-md" href="/" role="button">Signup</a>
          <a class="btn btn-primary btn-md float-right" href="/" role="button">Go To Lessons</a>
        </p>
      </div>
  </Fragment>
)
}

export default Greeting