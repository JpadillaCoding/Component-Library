import React from 'react';
import "./button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => (
    <button className={`button-${props.type} ${props.size}`} onClick={props.action}>{props.label}</button>
)

export default Button; 