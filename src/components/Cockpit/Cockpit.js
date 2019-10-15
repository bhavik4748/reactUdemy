import React from 'react';
import cssClasses from './Cockpit.css';

const cockpit = (props) => {
    let addClass = [];
    let btnClass = '';
    if (props.Person.length <= 2)
        addClass.push(cssClasses.red);
    if (props.Person.length <= 1)
        addClass.push(cssClasses.bold);
    if (props.showPersons)
        btnClass = cssClasses.red;

    return (
        <div className={cssClasses.Cockpit}>
            <h1> Hi Welcome to React App!!!</h1>
            <div className={addClass.join(' ')}>This is really working!!</div>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Name</button>
        </div>
    );

}


export default cockpit;
