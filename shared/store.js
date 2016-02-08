import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import isNode from "detect-node"
import reducer from "./reducer"
import { selectSubreddit, fetchPosts } from "./action_creators"

const loggerMiddleware = createLogger()

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware//, // lets us dispatch() functions
		//loggerMiddleware // neat middleware that logs actions
	)
)

store.dispatch(selectSubreddit("reactjs"))
store.dispatch(fetchPosts("reactjs")).then(() => {
	if (!isNode) {
		let selectedSubreddit = store.getState().selectedSubreddit
		let postsBySubreddit = store.getState().postsBySubreddit.getIn([selectedSubreddit, "items"])		
		console.log(`--- TOP RESULTS FROM SUBREDDIT "${selectedSubreddit}"`)
		postsBySubreddit = postsBySubreddit.toJS().slice(0, 5) // show a few results only
		postsBySubreddit.map(post =>
			console.log(post.title)
		)
	}	
})

export default store