import React, { Component } from 'react';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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
        console.log(doesShow);
        this.setState({ showPersons: !doesShow });
    }


    render() {



        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                Persons={this.state.Person}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            >
            </Persons>
        }
        return (
            <div className={cssClasses.App}>
                <Cockpit
                    Person={this.state.Person}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                >

                </Cockpit>
                {persons}
            </div>
        );
    }
}

export default App;
