import React, {Component} from 'react'
import Fragment from '../../../UI/Fragment'
import Input from '../Input/Input'
import {connect} from 'react-redux'
import valid from '../../../UI/Validation/Validation'
import './Signin.css'
import * as actions from '../../../store/actions/index'
import {Redirect} from 'react-router-dom'

class Signup extends Component {

  state = {
    signupForm:{
      username: {
        title: 'Username',
        elementConfig: {
          type: 'text',
          placeholder: 'Enter Username'
        },
        value: '',
        validation: {
          required: true,
          validationMessage: ''
        },
        valid: null,
        touched: false
      },
      email: {
        title: 'Email',
        elementConfig: {
          type: 'email',
          placeholder: 'Enter Email'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
          validationMessage: ''
        },
        valid: null,
        touched: false
      },
      password: {
        title: 'Password',
        elementConfig: {
          type: 'password',
          placeholder: 'Enter password'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
          validationMessage: ''
        },
        valid: null,
        touched: false
      }
    },
    submitBtn: false
  }


submitHandler = (e) =>{
  // console.log(this.props)
  e.preventDefault()
  const data = {
    username: 'manski',
    email: this.state.signupForm.email.value,
    password: this.state.signupForm.password.value
  }
  this.props.authSignUp(data, 'signup')
}

btnSubmit = (value) => {
  const checkifTrue =(val) =>{
    return val === true
  }
  return !value.every(checkifTrue)
} 
changeHandler = (e, input) =>{
  const updatedForm = {
    ...this.state.signupForm
  }
  const toBeUpdatedForm = updatedForm[input.toLowerCase()]
  toBeUpdatedForm.value = e.target.value
  toBeUpdatedForm.valid = valid(toBeUpdatedForm.value, input)
  this.setState({signupForm: updatedForm})
}

render(){

  if(this.props.isSignedUp){
    return <Redirect to='/login'/>
  }

  let formInput = [];
  let btnvalues = []
  for (let key in this.state.signupForm){
    formInput.push({id: key, config: this.state.signupForm[key]})
    btnvalues.push(this.state.signupForm[key].valid)
  }
  
  let form = (
    <form onSubmit={this.submitHandler}>
      {formInput.map((form,i)=>(
        <Input 
          key={form.id}
          title={form.config.title}
          elementConfig={form.config.elementConfig}
          value={form.config.value}
          touched={form.config.touched}
          isValid={form.config.valid}
          shouldValidate={form.config.validation}
          change={this.changeHandler}/>
        
      ))}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input" />
          <label className="form-check-label">Send me updates</label>
        </div>
        <button 
          className="btn-sm btn-primary" 
          disabled={this.btnSubmit(btnvalues)}>Next</button>
    </form>
  )
  
  let message = null
  if(this.props.error){
    message = <div className="alert alert-danger" role="alert">
                {this.props.error}
              </div>

  }

  return (
    <Fragment>
      <div className='container Signin'>
        {message}
        <h3>Signup</h3>
        {form}


      </div>
    </Fragment>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isSignedUp: state.auth.isSignedUp,
    error: state.auth.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authSignUp: (data, signup) => {  dispatch(actions.authSignUp(data, signup)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)