import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import App from "./src/components/App";

export const routes = 
<Router>
	<Route path="/" component={App} />
</Router>;
