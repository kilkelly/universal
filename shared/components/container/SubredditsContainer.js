import { connect } from "react-redux"
import store from "../../store"
import * as actionCreators from "../../action_creators"
import { fetchPostsIfNeeded } from "../../action_creators"
import Subreddits from "../pure/Subreddits"

store.dispatch(
	fetchPostsIfNeeded(
		store.getState().get("selectedSubreddit")
	)
)

const mapStateToProps = (state) => {	
	return {		
		selectedSubreddit: state.get("selectedSubreddit"),
		items: state.getIn(["postsBySubreddit", state.get("selectedSubreddit"), "items"]),
		lastUpdate: state.getIn(["postsBySubreddit", state.get("selectedSubreddit"), "lastUpdate"]),
		isFetching: state.getIn(["postsBySubreddit", state.get("selectedSubreddit"), "isFetching"])
	}
}

const SubredditContainer = connect(
	mapStateToProps,
	actionCreators
)(Subreddits)
export default SubredditContainer

