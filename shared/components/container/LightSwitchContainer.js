import { connect } from "react-redux"
import * as actionCreators from "../../action_creators"
import LightSwitch from "../pure/LightSwitch"

function mapStateToProps(state) {
	return {
		lightSwitch: state.get("lightSwitch")
	}
}

const LightSwitchContainer = connect(
	mapStateToProps,
	actionCreators
)(LightSwitch)
export default LightSwitchContainer