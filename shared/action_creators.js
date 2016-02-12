import axios from "axios"

export const USE_LIGHT_SWITCH = "USE_LIGHT_SWITCH"

export const useLightSwitch = () => {
	return {
		type: USE_LIGHT_SWITCH
	}
}

// Async Actions tutorial
// http://rackt.org/redux/docs/advanced/AsyncActions.html

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT"
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT"
export const REQUEST_POSTS = "REQUEST_POSTS"
export const RECEIVE_POSTS = "RECEIVE_POSTS"

export const selectSubreddit = (subreddit) => {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	}
} 
export const invalidateSubreddit = (subreddit) => {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	}
}
export const requestPosts = (subreddit) => {
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}
export const receivePosts = (subreddit, data) => {	
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: (!data) ? null : data.children.map(child => child.data),
		receivedAt: Date.now()
	}	
}


// this is a thunk which is picked up by the thunkMiddleware
// a thunk is an action creator which returns a function
// http://rackt.org/redux/docs/advanced/AsyncActions.html
// The dispatch parameter in the inner function is set 
// by the thunkMiddleware.
export const fetchPosts = subreddit => dispatch => {	
	dispatch(requestPosts(subreddit))
	return axios.get(`http://www.reddit.com/r/${subreddit}.json`)				
				.then(response => dispatch(receivePosts(subreddit, response.data.data)))				
				.catch(response => dispatch(receivePosts(subreddit, null)))

}
const shouldFetchPosts = (state, subreddit) => {
	const posts = state.getIn(["postsBySubreddit", subreddit])	
	if (!posts) {
		return true
	} else if (posts.get("isFetching")) {		
		return false
	} else {
		return posts.get("didInvalidate")
	}
}
// The dispatch and getState parameters in the inner function is set 
// by the thunkMiddleware.
export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => {	
	if (shouldFetchPosts(getState(), subreddit)) {
		return dispatch(fetchPosts(subreddit))
	} else {
		return Promise.resolve()
	}
}
export const refreshSubreddit = subreddit => dispatch => {	
	dispatch(invalidateSubreddit(subreddit))
	dispatch(fetchPostsIfNeeded(subreddit))
}
export const setSubreddit = subreddit => dispatch => {	
	dispatch(selectSubreddit(subreddit))
	dispatch(fetchPostsIfNeeded(subreddit))
}