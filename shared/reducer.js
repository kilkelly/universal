import { combineReducers } from "redux"
import { fromJS } from "immutable"
import isNode from "detect-node"
import { 
	USE_LIGHT_SWITCH,
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from "./action_creators"


var initialTodos = fromJS([
	{
		text: "Make bed"
	},
	{
		text: "Buy groceries"
	}
])


const selectedSubreddit = (state = "reactjs", action) => {
	switch(action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit
		default:
			return state
	}
}

const posts = (state = fromJS({
	isFetching: false,
	didInvalidate: false,
	items: []				
}), action) => {
	switch(action.type) {
		case INVALIDATE_SUBREDDIT:
			return state.set("didInvalidate", true)
		case REQUEST_POSTS:			
			return state
					.set("isFetching", true)
					.set("didInvalidate", false)
		case RECEIVE_POSTS:
			return state
					.set("isFetching", false)
					.set("didInvalidate", false)
					.set("items", fromJS(action.posts))
					.set("lastUpdate", action.receivedAt)		
		default:
			return state
	}
}

const postsBySubreddit = (state = fromJS({}), action) => {
	switch(action.type) {
		case INVALIDATE_SUBREDDIT:		
		case RECEIVE_POSTS:		
		case REQUEST_POSTS:
			return state.set(				
				action.subreddit,
				posts(state.get(action.subreddit), action)
			)
		default:
			return state			
	}
}

const lightSwitch = (state = "OFF", action) => {
	switch(action.type) {
		case USE_LIGHT_SWITCH:
			return state === "OFF" ? "ON": "OFF"
		default:
			return state
	}
}

const todos = (state = (
				isNode
				? initialTodos
				: fromJS(window.__INITIAL_STATE__.todos)
				), action) => {
	switch(action.type) {
		default:
			return state
	}
}

const reducer = combineReducers({
	postsBySubreddit,
	selectedSubreddit,
	lightSwitch,
	todos
})

export default reducer