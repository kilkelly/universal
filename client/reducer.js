import { fromJS } from "immutable"

const reducer = (state = fromJS(window.__INITIAL_STATE__), action) => {
	switch(action.type) {
		case "USE_LIGHT_SWITCH":	
			return state.set("roomLit", !state.get("roomLit"))
		default:
			return state;	
	}
}

export default reducer