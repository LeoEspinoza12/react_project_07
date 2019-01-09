import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
import Fragment from '../../../UI/Fragment'

const Navbar = () => {
  return (
    <Fragment>

      <nav className="navbar navbar-expand-lg navbar-light Navbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link
            className="navbar-brand"
            to='/'>My React App</Link>
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
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to='/lists'>Lists</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
