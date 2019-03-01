const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});

module.exports = {
	entry: {
		app: './src/app.js',
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},
	module: {
		rules: [
			// {
			// 	test: /\.(jpe?g|png)$/i,
			// 	loader: 'responsive-loader',
			// 	options: {
			// 		adapter: require('responsive-loader/sharp'),
			// 		quality: 100,
			// 	}
			// },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|png|jpe?g)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]',
					},
				},
			},
			{ test: /\.svg$/, loader: 'svg-loader' }
			
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [htmlWebpackPlugin],
};
