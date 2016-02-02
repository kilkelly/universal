import React from "react"
import Menu from "./Menu"

export default class App extends React.Component {
	//console.log(React.Children.only(props.children))
	render() {
		return(
			<div>
				<Menu />
				{this.props.children}										
			</div>		
		)
	}	
}
