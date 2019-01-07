import React, { Component } from 'react'
import Fragment from '../../../UI/Fragment'
import InputItem from '../../../UI/InputItems'
import './InputArea.css'

class InputArea extends Component {
  state ={
    name: '',
    amount: ''
  }

  change(input){

  }

  submit(){

  }

  render() {
    return (
      <Fragment>
        <div className="row InputCounter">
          <div className="col-sm-7">
              <InputItem 
                elementType='text'
                placeholder='Enter firstname'
                value={this.state.name}
                change={this.change}/>
              </div>
            <div className="col-sm-3 input-group mb-3">
              <InputItem
                elementType='select'
                value={this.state.amount}
                change={this.change}/>
            </div>
            <div className="col-sm-2">
              <InputItem
                elementType='button'/>
            </div>
        </div>
      </Fragment>
    )
  }
}

export default InputArea
