import React from "react"
import express from "express"
import { match, RoutingContext } from "react-router"
import { renderToString } from "react-dom/server"
import { routes } from "../shared/routes"

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

				let componentHtml = renderToString(<RoutingContext {...renderProps} />)				

				let html = `
				<html>
					<head>
						<title>Universal</title>
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