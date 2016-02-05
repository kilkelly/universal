import React from "react"

// PURERENDERMIXIN - See section in README.md
import PureRenderMixin from "react-addons-pure-render-mixin"


export default class Todos extends React.Component {

	constructor(props) {
		super(props)
		// http://egorsmirnov.me/2015/09/30/react-and-es6-part4.html
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);		
	}	

	render() {
		return(
			<div>
				<h1>Todos</h1>
				<ul>
					{this.props.route.todos.map((todo, index) => 
						<li key={index}>{todo.get("text")}</li>
					)}
				</ul>
			</div>
		)	
	}	
}

export default Todos