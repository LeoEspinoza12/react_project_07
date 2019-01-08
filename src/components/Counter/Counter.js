import React, { Component } from 'react'

import InputArea from './InputArea/InputArea'
import ListSummary from './ListSummary/ListSummary'
import Fragment from '../../UI/Fragment'
import './Counter.css'



class Counter extends Component {

  state ={
    lists: [],
    totals: [],
  }


  componentWillMount(){
    console.log('asdf')
  }
  
  
  enterList=(listItem)=>{
    const list = this.state.lists
    list.push(listItem)
    this.setState({lists: list})
    
    
    let totalAmount = 0
    let persons = null
    for(let key in this.state.lists){
      totalAmount += this.state.lists[key].amount
      persons += 1
    }
    this.setState({
      totals: {
        amount: totalAmount,
        persons: persons
      }
    })
  }

  render() {
    console.log(this.state.lists)
    return (
      <Fragment>
        <div className="container Counter">

        {/* input starts */}
        <InputArea 
          submitList={this.enterList}/>

          



        {/* List Starts */}
        <div className="ContriLists">
          <ListSummary 
            summary={this.state.totals}/>
          

          <div className="ContributionList">
            <ul className="list-group">
              <li className="list-group-item">
                <p>Aiman Adlawan 
                  <span>
                    <span>
                      <i>Sep 7 2am</i>
                    </span>
                    <span>
                      <b>500</b>
                    </span>
                  </span>
                </p>
              </li>
              <li className="list-group-item">
                <p>Aiman Adlawan 
                  <span>
                    <span>
                      <i>Sep 7 12am</i>
                    </span>
                    <span>
                      <b>25,500 </b>
                    </span>
                  </span>
                </p>
              </li>
              <li className="list-group-item">
                <p>Aiman Adlawan 
                  <span>
                    <span>
                      <i>Sep 7 12am</i>
                    </span>
                    <span>
                      <b>1,500 </b>
                    </span>
                  </span>
                </p>
              </li>
            </ul>
          </div>

        </div>



        </div>
      </Fragment>
    )
  }
}
export default Counter