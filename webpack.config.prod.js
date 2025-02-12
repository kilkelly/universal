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
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style!css!sass"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
}