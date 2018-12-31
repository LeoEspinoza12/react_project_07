import React from 'react'
import './Navbar.css'
import Fragment from '../../UI/Fragment'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light Navbar">
        <div className="collapse navbar-collapse">
          <a className="navbar-brand" href="/">Language App</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Lessons</a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
