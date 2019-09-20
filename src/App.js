import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi Welcome to React App!!!</h1>
        <Person name="Bhavik" age="34" />
        <Person name="Pooja" age="30" />
      </div>
    );
  }
}

export default App;
