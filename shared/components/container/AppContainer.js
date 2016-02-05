import { connect } from "react-redux"
import * as actionCreators from "../../action_creators"
import App from "../pure/App"

function mapStateToProps(state) {
	return {
		//location: state.location
	}
}

const AppContainer = connect(
	mapStateToProps,
	actionCreators
)(App)
export default AppContainer