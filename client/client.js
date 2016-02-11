import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { routes } from "../shared/routes";
import store from "../shared/store"

const clientRender = () => {
	ReactDOM.render(<Provider store={store}>{routes}</Provider>,
					document.getElementById("root"))
}


const location = document.getElementById("location")
location.textContent = "client"
location.style.backgroundColor = "#6CF"

store.subscribe(clientRender)	
clientRender()	

