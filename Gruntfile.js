'use strict';
//var webpackConfig = require("./webpack.config.js");

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-webpack');

	grunt.initConfig({
		webpack: {
			//options: webpackConfig,
			build: {
				entry: './app/index.coffee',
				output: {
					path: 'dist/',
					filename: 'bundle-[hash].js',
				},
				module: {
					loaders: [
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
						{ test: /\.less$/, loader: "style!css!less" },
						//Font
						{ test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
						{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
					]
				}
			}
		},
		jshint: {
			all: {
				options: {
					jshintrc: './.jshintrc'
				},
				src: [
					'**/index.js', '*.js', '!test/**/*.js', '!node_modules/**/*.js']
			}
		}/*,
		"webpack-dev-server": {
			options: {
				webpack: webpackConfig,
				publicPath: "/" + webpackConfig.output.publicPath
			},
			start: {
				keepAlive: true,
				webpack: {
					devtool: "eval",
					debug: true
				}
			}
		}*/
	});

	grunt.registerTask('default', ['webpack', 'jshint', 'webpack-dev-server']);
}
