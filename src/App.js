import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    Person: [
      { name: "Mr B.", age: "34" },
      { name: "Mrs P", age: "30" },
      { name: "Mr A", age: "27" }
    ]
  }

  switchNameHandler=()=>{
    console.log('was clicked');

    this.setState({
      Person: [
        { name: "Mr Bhavik", age: "34" },
        { name: "Mrs P", age: "30" },
        { name: "Mr A", age: "27" }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi Welcome to React App!!!</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
        <Person name={this.state.Person[1].name} age={this.state.Person[1].age} />
        <Person name={this.state.Person[2].name} age={this.state.Person[2].age} > This is P's bro </Person >
      </div>
    );
  }
}

export default App;
