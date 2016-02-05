import React from "react"

export default class LightSwitch extends React.Component {	
	render() {		
		return(			
			<button onClick={this.props.useLightSwitch}>
				Light switch is {this.props.roomLit ? "ON": "OFF"}
			</button>
		)			
	}
}