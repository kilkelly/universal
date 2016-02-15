var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: [
		"webpack-hot-middleware/client",
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
				loader: "babel",
		        query: {
		          presets: ['react-hmre']
		        }				
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style!css!sass"
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devtool: 'inline-source-map',
	devtool: 'cheap-module-eval-source-map',
}