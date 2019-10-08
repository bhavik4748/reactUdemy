import React, { Component } from 'react';
import cssClasses from './App.css';
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


    nameChangedHandler = (event, id) => {
        const personId = this.state.Person.findIndex((p) => {
            return (p.id === id);
        });

        const Persons = [...this.state.Person];
        Persons[personId].name = event.target.value;

        this.setState({ Person: Persons });
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
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
        }
        let addClass = [];
        if (this.state.Person.length <= 2)
            addClass.push(cssClasses.red);
        if (this.state.Person.length <= 1)
            addClass.push(cssClasses.bold);

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.Person.map((person1, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person1.name}
                                age={person1.age}
                                key={person1.id}
                                changed={(event) => this.nameChangedHandler(event, person1.id)}
                            />
                        })
                    }
                </div>
            );
            style.backgroundColor = 'red';
        }
        return (
            <div className={cssClasses.App}>
                <h1> Hi Welcome to React App!!!</h1>
                <div className={addClass.join(' ')}>This is really working!!</div>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Name</button>
                {persons}
            </div>
        );
    }
}

export default App;
