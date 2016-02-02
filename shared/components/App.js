import React from "react"
import { connect } from "react-redux"
import isNode from "detect-node"
import Menu from "./Menu"

// https://camjackson.net/post/9-things-every-reactjs-beginner-should-know?utm_campaign=React%2BNewsletter&utm_medium=email&utm_source=React_Newsletter_21#write-functional-components
const App = props => {
	return(
		<div>
			<div>{props.location}</div>
			<Menu />
			{props.children}										
		</div>		
	)
}

function mapStateToProps(state) {
	return {
		location: state.location
	}
}


//export default App
export default connect(mapStateToProps)(App)