import { connect } from "react-redux"
import App from "../pure/App"

function mapStateToProps(state) {
	return {
		//location: state.location
	}
}

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer