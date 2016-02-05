import React from "react"
import { Link } from "react-router"

// STATELESS FUNCTIONAL COMPONENT - See section in README.md
const Menu = props => {
	return(
		<div>
			<Link to="/">Home</Link>&nbsp;|&nbsp;			
			<Link to="todos">Todos</Link>
		</div>
	)	
}

export default Menu
