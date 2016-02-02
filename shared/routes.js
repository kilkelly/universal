import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"
import createMemoryHistory from "history/lib/createMemoryHistory"
import isNode from "detect-node"
import store from "./store"
import AppContainer from "./components/container/AppContainer"
import Home from "./components/pure/Home"
import About from "./components/pure/About"
import Todos from "./components/pure/Todos"

let history = isNode 
					? createMemoryHistory()
					: createBrowserHistory()

export const routes =
<Router history={history}>
	<Route path="/" component={AppContainer}>	
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
		<Route path="todos" component={Todos} todos={store.getState().get("todos")}/>
	</Route>	
</Router>	

