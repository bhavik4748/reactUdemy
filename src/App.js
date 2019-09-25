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

  switchNameHandler = (newName) => {
    this.setState({
      Person: [
        { name: newName, age: "34" },
        { name: "Mrs P", age: "30" },
        { name: "Mr A", age: "27" }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      Person: [
        { name: "Mr B", age: "34" },
        { name: event.target.value, age: "30" },
        { name: "Mr A", age: "27" }
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> Hi Welcome to React App!!!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler()}>switch name</button>
        <Person
          name={this.state.Person[0].name}
          age={this.state.Person[0].age} />
        <Person
          name={this.state.Person[1].name}
          age={this.state.Person[1].age}
          changed={this.nameChangedHandler} />
        <Person
          click={this.switchNameHandler.bind(this, "Bhav!")}
          name={this.state.Person[2].name}
          age={this.state.Person[2].age}>
          This is P's bro </Person >
      </div>
    );
  }
}

export default App;
