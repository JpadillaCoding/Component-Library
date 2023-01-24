import React from "react";
import { storiesOf } from "@storybook/react";

import Checkbox from "./checkbox";

storiesOf("Checkbox", module)
.add("checkbox black" , () => <Checkbox 
color=""
label="optional label"
/>) 
.add("checkbox blue", () => <Checkbox 
color="blue"
label=""
/>)