import { fromJS } from "immutable"

var initialState = fromJS({
	todos: [
	{
		text: "Make bed"
	},
	{
		text: "Buy groceries"
	}]
})

const reducer = (state = initialState, action) => {
	switch(action.type) {
		default:
			return state;	
	}
}

export default reducer