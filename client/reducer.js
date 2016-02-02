import { fromJS } from "immutable"

const reducer = (state = fromJS(window.__INITIAL_STATE__), action) => {
	switch(action.type) {
		case "ADD_TODO":
			console.log("ADD_TODO action initiated")
			return state;
		default:
			return state;	
	}
}

export default reducer