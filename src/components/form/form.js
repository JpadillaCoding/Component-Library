import React from "react";
import "./form.css"

const Form = (props) => (

    <form>
        <label>{props.label}</label>
        <input className={`input- ${props.size}`} placeholder={props.plceholder || props.label}></input>
    </form>
)

export default Form;