var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: [
		"./client/client"
	],
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: '/'
	},
	resolve: {
		modulesDirectories: ["node_modules"],
		extensions: ["", ".js"]
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel"]
			}
		]
	},
	devtool: 'inline-source-map',
	devtool: 'cheap-module-eval-source-map',
}