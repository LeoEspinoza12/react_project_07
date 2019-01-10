import React, {Component} from 'react'
import Fragment from '../../../UI/Fragment'
// import {Link} from 'react-router-dom'
import Input from '../Input/Input'
import valid from '../../../UI/Validation/Validation'
import './SignupOne.css'

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
  this.props.history.push('/sign-up/address')
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
  
  return (
    <Fragment>
      <div className='container SignupOne'>
        <h3>Account Information</h3>
        {form}


      </div>
    </Fragment>
    )
  }
}


export default Signup