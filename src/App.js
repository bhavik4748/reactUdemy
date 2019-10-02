import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Person: [
      { id: "sdgss", name: "Mr B", age: "34" },
      { id: "sdswe", name: "Mrs P", age: "30" },
      { id: "fgndg", name: "Mr A", age: "27" }
    ],
    showPersons: false
  }


  nameChangedHandler = (event) => {
    this.setState({
      Person: [
        { id: "sdgss", name: "Mr B", age: "34" },
        { id: "sdswe", name: event.target.value, age: "30" },
        { id: "fgndg", name: "Mr A", age: "27" }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.Person];
    persons.splice(personIndex, 1);
    this.setState({ Person: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      console.log(this.state.Person);

      persons = (
        <div>
          {
            this.state.Person.map((person1, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person1.name}
                age={person1.age}
                key={person1.id}
              />
            })
          }
        </div>
      );
      console.log(persons);
    }
    return (
      <div className="App">
        <h1> Hi Welcome to React App!!!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
