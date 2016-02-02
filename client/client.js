import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { routes } from "../shared/routes";
import store from "../shared/store"

ReactDOM.render(<Provider store={store}>{routes}</Provider>,
				 document.getElementById("root"))
