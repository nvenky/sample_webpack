module.exports = {
	module: {
		loaders: [
			{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
			// Exports Angular
			//{ test: /[\/]angular\.js$/, loader: "exports?angular" },
			// Script Loaders
			{ test: /\.coffee$/, loader: "coffee" },
			// Markup Loaders
			{ test: /\.html$/, loader: "html" },
			//{ test: /\.jade$/, loader: "template-html" },
			// Style Loaders, style! inlines the css into the bundle files
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.scss$/, loader: "style!css!sass" },
			{ test: /\.less$/, loader: "style!css!less" }
		]
	}
};
