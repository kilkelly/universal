import React from "react"
import Menu from "./Menu"

export default class App extends React.Component {
	render() {
		return(
				<div>
					<Menu />
					{this.props.children}										
				</div>	
		)
	}
}