import React, { Component } from 'react'

import InputArea from './InputArea/InputArea'
import Fragment from '../../UI/Fragment'
import './Counter.css'



class Counter extends Component {



  render() {
    return (
      <Fragment>
        <div className="container Counter">

        {/* input starts */}
        <InputArea />

          



        {/* List Starts */}
        <div className="ContriLists">

          <div className="row ContriSummary">
            <div className="col-sm-6">
              <p>Total contribution: <b className='float-right'>$ 500</b></p>
            </div>
            <div className="col-sm-6">
              <p>Total person/s <b className="float-right">10</b></p>
            </div>
          </div>

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