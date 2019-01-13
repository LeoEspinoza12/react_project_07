
import React, {Component} from 'react'
import Fragment from '../../../UI/Fragment'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as actions from '../../../store/actions/index'
import './Login.css'

class Login extends Component{

  state ={
    email: '',
    password: ''
  }

login = (e) => { 
  e.preventDefault()
  this.props.signUp(this.state.email, this.state.password)
}

change=(e, name)=>{
  this.setState({[e.target.name] : e.target.value})
}

render(){
  let message, error = null
  if(this.props.isSignedUp){
    message = <div className = "alert alert-success" role = "alert">
                You have just signed-up. You can now log in.
              </div>
  }
  if (this.props.token) {
    return <Redirect to='/lessons' />
  }

  if (this.props.error) {
    error = <div className = "alert alert-danger" role = "alert">{this.props.error}</div>
  }
  
  return (
    <Fragment>
      <div className='container Login'>
        {error}
        {message}
        <form onSubmit={(e)=>this.login(e)}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text" 
            className="form-control" 
            name='email'
            placeholder="Enter Email"
            value={this.state.email}
            onChange={(e)=>this.change(e, 'email')} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" 
            className="form-control"
            name='password'
            placeholder="Enter Password"
            value={this.state.password}
            onChange={(e)=>this.change(e, 'password')} />
        </div>
          <button className="btn-sm btn-primary">Submit</button>
        </form>
      </div>
    </Fragment>
  )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedUp: state.auth.isSignedUp,
    token: state.auth.authToken,
    error: state.auth.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { signUp: (email, password) => {dispatch(actions.login(email, password)) }}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
