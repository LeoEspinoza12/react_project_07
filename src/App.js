import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
