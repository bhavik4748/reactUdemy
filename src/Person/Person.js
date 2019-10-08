import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media(min-width:500px)': {
            width: '450px'
        }
    }


    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>
                I am {props.name} and I am {props.age}
            </p>
            <p>{props.children}</p>
            <p>
                <input type="text" onChange={props.changed} value={props.name} >
                </input>
            </p>
        </div>
    )

}

export default Radium(person);