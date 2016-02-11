import React from "react"
import { Router, Route, IndexRoute } from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"
import createMemoryHistory from "history/lib/createMemoryHistory"
import isNode from "detect-node"
import store from "./store"
import AppContainer from "./components/container/AppContainer"
import Home from "./components/pure/Home"
import Todos from "./components/pure/Todos"
import SubredditsContainer from "./components/container/SubredditsContainer"

let history = isNode 
					? createMemoryHistory()
					: createBrowserHistory()

export const routes =
<Router history={history}>
	<Route path="/" component={AppContainer}>	
		<IndexRoute component={Home} />
		<Route path="todos" component={Todos} todos={store.getState().get("todos")}/>
		<Route path="subreddits" component={SubredditsContainer} />
	</Route>	
</Router>	

