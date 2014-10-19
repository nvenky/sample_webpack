'use strict';
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		clean: ['./dist'],
		
		webpack: {
			options: webpackConfig,
			build: {
				plugins: webpackConfig.plugins.concat(
					new webpack.DefinePlugin({
					"process.env": {
						// This has effect on the react lib size
						"NODE_ENV": JSON.stringify("production")
					}
				}),
				new webpack.optimize.DedupePlugin(),
				new webpack.optimize.UglifyJsPlugin()
				)
			},
			"build-dev": {
				devtool: "sourcemap",
				debug: true
			}
		},
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
		}
	});

	grunt.registerTask('default', ['clean', 'webpack', 'webpack-dev-server']);
}
