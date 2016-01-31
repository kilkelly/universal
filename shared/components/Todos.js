import React from "react"

const Todos = props => {
	return(
		<div>
			<h1>Todos</h1>
			<ul>
				{props.route.state.todos.map((todo, index) => 
					<li key={index}>{todo.text}</li>
				)}
			</ul>
		</div>
	)	
}

export default Todos