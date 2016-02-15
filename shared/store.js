import { createStore, applyMiddleware, compose } from "redux"
import { fromJS, Map } from "immutable"
import thunkMiddleware from "redux-thunk"
import createLogger from "redux-logger"
import isNode from "detect-node"
import DevTools from "./components/DevTools"
import reducer from "./reducer"
import { selectSubreddit, fetchPosts, fetchPostsIfNeeded } from "./action_creators"

const loggerMiddleware = createLogger()

const middleware = 	
	applyMiddleware(
		thunkMiddleware//, // lets us dispatch() functions
		//loggerMiddleware // neat middleware that logs actions
	)

const enhancer = compose(
	middleware,
	DevTools.instrument()
)

// if on the client-side then hydrate the store using data sent
// by the server
if (!isNode) {
	console.log("hydrating client store from server")
	var store = createStore(reducer, fromJS(window.__INITIAL_STATE__), enhancer)
} 
// else we are on server-side and we don't hydrate the store initially
else {
	console.log("creating server store")
	var store = createStore(
		reducer,
		// initial states set to undefined as the reducers 
		// themselves provide the default states
		fromJS({
			postsBySubreddit: undefined,
			selectedSubreddit: undefined,
			lightSwitch: undefined,
			todos: undefined
		})
		, enhancer)
}

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
//if (module.hot) {
//	module.hot.accept('./reducer', () =>
//		store.replaceReducer(require('./reducer')/*.default if you use Babel 6+ */)
//	);
//}

//const store = store
export default store