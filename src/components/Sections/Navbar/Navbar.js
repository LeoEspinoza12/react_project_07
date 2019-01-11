import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
import Fragment from '../../../UI/Fragment'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index'

class Navbar extends Component {



  componentDidMount(){
    
    this.props.authStart()
  }
  
  
  render(){
    return (
      <Fragment>

      <nav className="navbar navbar-expand-lg navbar-light Navbar">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link
            className="navbar-brand"
            to='/'
            onClick={this.clickHandler}>My React App</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to='/signin'>Signin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link" 
                to='/Login'>Login</NavLink>
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
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      authStart: (text) => { dispatch(actions.authStart(text)) }
  }
}

export default connect(null, mapDispatchToProps)(Navbar)
