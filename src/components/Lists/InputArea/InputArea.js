import React, { Component } from 'react'
import Fragment from '../../../UI/Fragment'
import InputItem from '../../../UI/InputItems'
import validation from '../../../UI/Validation'
import {buttonSwitchHandler} from '../../../UI/Utils'
import {withRouter} from 'react-router-dom'
import './InputArea.css'

class InputArea extends Component {

  state = {
    enteredPerson: {
      nameEntered: {
        value: '',
        valid: false
      },
      amountEntered: {
        value: '',
        valid: false
      },
      disabled: true,
    },
  }

  changeHandler = (e, inputName)=>{
    const entry = { ...this.state.enteredPerson }

    const changeEntry = entry[inputName]
    changeEntry.value = e.target.value
    changeEntry.valid = validation(changeEntry.value, inputName)
    
    let btnValues = []
    for(let key in entry){ 
      btnValues.push(entry[key].valid)
    }
    btnValues.splice(2,2)

    entry.disabled = buttonSwitchHandler(btnValues)
    this.setState({enteredPerson: entry})
  }



  submit =(e)=>{
    e.preventDefault()
    let time = new Date()
    const person  = {
        name: this.state.enteredPerson.nameEntered.value,
        amount: this.state.enteredPerson.amountEntered.value,
        time: time
      }
    
    this.setState({enteredPerson: validation(this.state.enteredPerson, 'sampState')})
    this.props.submitList(person)
  }
    
    
    
  render() {
    return (
      <Fragment>
        <form onSubmit={this.submit}>
        <div className="row InputCounter">
          <div className="col-sm-7">
            <InputItem 
              elementType='text'
              placeholder='Enter firstname'
              name='nameEntered'
              value={this.state.enteredPerson.nameEntered.value}
              valid={this.state.enteredPerson.nameEntered.valid}
              change={this.changeHandler}/>
          </div>
          <div className="col-sm-3 input-group mb-3">
            <InputItem
              elementType='select'
              name='amountEntered'
              value={this.state.enteredPerson.amountEntered.value}
              change={this.changeHandler}/>
          </div>
          <div className="col-sm-2">
            <InputItem
              elementType='button'
              disabled={this.state.enteredPerson.disabled}/>
          </div>
        </div>
      </form>
      </Fragment>
    )
  }
}

export default withRouter(InputArea)
