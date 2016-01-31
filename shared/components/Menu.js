import React from "react"
import { Link } from "react-router"

// https://camjackson.net/post/9-things-every-reactjs-beginner-should-know?utm_campaign=React%2BNewsletter&utm_medium=email&utm_source=React_Newsletter_21#write-functional-components
const Menu = props => {
	return(
		<div>
			<Link to="/">Home</Link>&nbsp;|&nbsp;
			<Link to="about">About</Link>&nbsp;|&nbsp;
			<Link to="todos">Todos</Link>
		</div>
	)	
}

export default Menu