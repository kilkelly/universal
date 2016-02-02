import React from "react"
import express from "express"
import { match, RoutingContext } from "react-router"
import { renderToString } from "react-dom/server"
import { Provider } from "react-redux"
import { routes } from "../shared/routes"
import store from "../shared/store"

export const start = (port = 3000) => {
	const app = express()	

	app.use(express.static("dist"))

	app.get("*", (req, res) => {		

		// React Router URL matching and handling
		match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {						
			if (error) {
				res.status(500).send(error.message);
			}
			else if (redirectLocation){
				console.log("redirect")
				res.redirect(302, redirectLocation.pathname + redirectLocation.search)
			} else if (renderProps) {

				let componentHtml = renderToString(<Provider store={store}><RoutingContext {...renderProps} /></Provider>)				

				let html = `
				<!DOCTYPE HTML>
				<html>
					<head>
						<title>Universal</title>
						<meta charset="UTF-8" />
						<script>
							window.__INITIAL_STATE__ = {
								location: "client",
								todos: [
								{
									text: "Make bed"
								},
								{
									text: "Buy groceries"
								}]
							}
						</script>
					</head>
					<body>
						<div id="root">${componentHtml}</div>
						<script src="bundle.js"></script>
					</body>
				</html>`

				res.status(200).send(html)		
			} else {
				res.status(404).send("Not found")
			}			
		})

	})	

	app.listen(port, "localhost", (err) => {
		console.log(`universal app server listening on port ${port}`)
	})
}