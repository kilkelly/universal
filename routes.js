import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"
import createMemoryHistory from "history/lib/createMemoryHistory"
import isNode from "detect-node"
import App from "./src/components/App"
import Home from "./src/components/Home"
import About from "./src/components/About"

let history = isNode 
					? createMemoryHistory()
					: createBrowserHistory()

export const routes = 		
<Router history={history}>
	<Route path="/" component={App}>	
		<IndexRoute component={Home} />
		<Route path="about" component={About} />	
	</Route>	
</Router>

