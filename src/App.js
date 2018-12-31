import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Landing from './container/landing'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Landing />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
