import { createStore } from "redux"
import isNode from "detect-node"
import clientReducer from "../client/reducer"
import serverReducer from "../server/reducer"

let reducer = isNode
				? serverReducer
				: clientReducer

const store = createStore(reducer)

export default store