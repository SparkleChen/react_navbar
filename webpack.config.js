var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/* var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true'; */
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'public/build');

module.exports = {

    entry: path.resolve(ROOT_PATH, 'public/js/navbar.js'),

	output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },


	devServer: {
		hot: true,
        inline: true,
		progress:true,
        contentBase: path.join(__dirname, "public"),
        host:'localhost',
        port:'8080'/*,
	    proxy:{
		   '/navbar/data':{
			   target:'http://localhost:3000',
			   changeOrigin: true,
			   secure: false
		   }
	   } */
	},

    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['es2015', 'react']}
            },
            {
			     test: /\.css$/,loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
	  plugins: [
		new HtmlWebpackPlugin({
			template:'public/templates/index.html'
			}),
		new webpack.HotModuleReplacementPlugin()
	],

    resolve: {
        extensions: ['.css', '.js', '.jsx'],
    }

}