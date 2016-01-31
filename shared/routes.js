import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"
import createMemoryHistory from "history/lib/createMemoryHistory"
import isNode from "detect-node"
import store from "./store"
import App from "./components/App"
import Home from "./components/Home"
import About from "./components/About"
import Todos from "./components/Todos"

let history = isNode 
					? createMemoryHistory()
					: createBrowserHistory()

export const routes = 		
<Router history={history}>
	<Route path="/" component={App}>	
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
		<Route path="todos" component={Todos} state={store.getState()}/>
	</Route>	
</Router>

