import React from "react";
import "./inputButton.css"
import Form from "../form/form.js"
import "../form/form.css"
import Button from "../button/button.js"
import "../button/button.css"

function InputButton (props) {
    function clicked () {
        let formInput = document.getElementById("inputForm").value
        alert(formInput)
    }
    return (
    <div >
        <Form placeholder={props.placeholder} size={props.size} />
        <Button label={props.label} type="primary" size={props.size} action={clicked}/>
    </div>
    )
}

export default InputButton