import React from "react"
import express from "express"
import { match, RouterContext } from "react-router"
import renderUniversal from "./render"
import App from "./components/App"
import routes from "../routes"

export const start = (port = 3000) => {
	const app = express()	

	app.get("*", (req, res) => {
		//res.end(renderUniversal(<App />))		

		match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
			console.log(renderProps)
			if (error) {
				res.status(500).send(error.message);
			}
			else if (redirectLocation){
				res.redirect(302, redirectLocation.pathname + redirectLocation.search)
			} else if (renderProps) {
				res.status(200).send(renderUniversal(<RouterContext {...renderProps} />))
			} else {
				res.status(404).send("Not found")
			}			
		})

	})	

	app.listen(port, "localhost", (err) => {
		console.log(`universal app server listening on port ${port}`)
	})
}