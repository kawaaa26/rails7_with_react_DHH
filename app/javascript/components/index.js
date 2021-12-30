import React from "react"
import { render } from "react-dom"
// import { createElement } from "react"
import h from "components/htm_create_element"

import Clock from "components/clock"
import FlavorForm from "components/flavor_form"
import LoginControl from "components/login_control"

render(
  h`<${Clock} /><${Clock} /><${Clock} /><${FlavorForm} /><${LoginControl} />`,
  document.getElementById("root")
)
