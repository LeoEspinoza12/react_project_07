import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import Fragment from '../../../UI/Fragment'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

class Navbar extends Component {

  
  render(){

    let routes = <Fragment>
                  <li className="nav-item">
                    <NavLink 
                      className="nav-link" 
                      to='/signup'>Signup</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink 
                      className="nav-link" 
                      to='/Login'>Login</NavLink>
                  </li>
                 </Fragment>

      if(this.props.token){
        routes = <Fragment>
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
                  <li className="nav-item">
                    <NavLink 
                      className="nav-link" 
                      to='/logout'>Logout</NavLink>
                  </li>
                </Fragment>
      }


    return (
      <Fragment>

      <nav className="navbar navbar-expand-lg navbar-light Navbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink
            className="navbar-brand"
            to='/'
            onClick={this.clickHandler}>My React App</NavLink>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {routes}
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.auth.authToken
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      auth: (text) => { dispatch(actions.auth(text)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
