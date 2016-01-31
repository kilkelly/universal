import React from "react"
import isNode from "detect-node"
import Menu from "./Menu"

const whereAreWe = isNode ? "server" : "client"
const inlineStyle = {
	background: isNode ? "#FFC" : "#6CF"
}


// https://camjackson.net/post/9-things-every-reactjs-beginner-should-know?utm_campaign=React%2BNewsletter&utm_medium=email&utm_source=React_Newsletter_21#write-functional-components
const App = props => {
	return(
		<div>
			<div style={inlineStyle}>{whereAreWe}</div>
			<Menu />
			{props.children}										
		</div>		
	)
}

export default App