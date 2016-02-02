import React from "react"
import { Link } from "react-router"


export default class Menu extends React.Component {

	render() {
		return(
			<div>
				<Link to="/">Home</Link>&nbsp;|&nbsp;
				<Link to="about">About</Link>&nbsp;|&nbsp;
				<Link to="todos">Todos</Link>
			</div>
		)	
	}	
}
