var initialState = {
	todos: [
	{
		text: "Make bed"
	},
	{
		text: "Buy groceries"
	}]
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "ADD_TODO":
			console.log("ADD_TODO action initiated")
			return state;
		default:
			return state;	
	}
}

export default reducer