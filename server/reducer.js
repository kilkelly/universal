import { fromJS } from "immutable"

var initialState = fromJS({
	roomLit: true,
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