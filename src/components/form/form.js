import React from "react";
import "./form.css"

const Form = (props) => (

    <form>
        <label>{props.label}</label>
        <input placeholder={props.plceholder || props.label}></input>
    </form>
)

export default Form;