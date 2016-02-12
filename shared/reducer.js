import { fromJS } from "immutable"
// Redux combineReducers treats state object as a plain JavaScript object.
// combineReducers created using redux-immutable uses Immutable.js API to iterate the state.
import { combineReducers } from "redux-immutable"
import isNode from "detect-node"
import { 
	USE_LIGHT_SWITCH,
	SELECT_SUBREDDIT,
	INVALIDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from "./action_creators"


const selectedSubreddit = (state = "videos", action) => {
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
				})
				, action) => {
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
			return state.set(				
				action.subreddit,
				posts(state.get(action.subreddit), action)
			)
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

const todos = (state = fromJS([
							{
								text: "Make bed"
							},
							{
								text: "Buy groceries"
							}
						]), action) => {
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