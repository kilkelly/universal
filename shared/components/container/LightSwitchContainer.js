import { connect } from "react-redux"
import * as actionCreators from "../../action_creators"
import LightSwitch from "../pure/LightSwitch"

function mapStateToProps(state) {
	return {
		roomLit: state.get("roomLit")
	}
}

const LightSwitchContainer = connect(
	mapStateToProps,
	actionCreators
)(LightSwitch)
export default LightSwitchContainer