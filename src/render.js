import isNode from "detect-node"
import { renderToString } from "react-dom/server"
import { render } from "react-dom"

if(isNode) {
	var renderUniversal = renderToString;
}
else {
	var renderUniversal = render;
}

export default renderUniversal