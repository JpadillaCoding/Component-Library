import React from "react";
import "./checkbox.css"

const Checkbox = (props) => (

    <form>
        <div>
            <input type="checkbox" id="checkbox"></input>
            <span class="checkmark"></span>
            <label class="container">{props.label}
            </label>
        </div>
    </form>

)

export default Checkbox