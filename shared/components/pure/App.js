import React from "react"
import Menu from "./Menu"
import LightSwitchContainer from "../container/LightSwitchContainer"
import OneOrManyChildGrouping from "../pure/OneOrManyChildGrouping"
import IAmAChild from "../pure/IAmAChild"

export default class App extends React.Component {
	//console.log(React.Children.only(props.children))
	render() {
		return(
			<div>
				<Menu />				
				
				{this.props.children}
				
				<LightSwitchContainer />
				
				<OneOrManyChildGrouping>
					<IAmAChild />
				</OneOrManyChildGrouping>
				
				<OneOrManyChildGrouping>
					<IAmAChild />
					<IAmAChild />
					<IAmAChild />
				</OneOrManyChildGrouping>				
			</div>		
		)
	}	
}
