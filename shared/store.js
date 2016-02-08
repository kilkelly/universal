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

// async actions example from
// http://rackt.org/redux/docs/advanced/AsyncActions.html

if (!isNode) { // only show client-side
	store.dispatch(selectSubreddit("reactjs"))
	store.dispatch(fetchPosts("reactjs")).then(() => {
			let selectedSubreddit = store.getState().selectedSubreddit
			let postsBySubreddit = store.getState().postsBySubreddit.getIn([selectedSubreddit, "items"])		

			console.log(`--- TOP RESULTS FROM SUBREDDIT "${selectedSubreddit}"`)

			 // convert to traditional JS structures to make work easier
			postsBySubreddit = postsBySubreddit.toJS()		
			postsBySubreddit.slice(0, 5).map(post =>
				console.log(post.title)
			)
	})
	.catch(response => console.log(response))
}	

export default store