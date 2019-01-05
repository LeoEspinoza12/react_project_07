import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
import Fragment from '../../UI/Fragment'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light Navbar">
        <div className="collapse navbar-collapse">
          <Link
            className="navbar-brand"
            to='/'>Language App</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to='/sign-up'>Signup</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to='/lessons'>Lessons</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
