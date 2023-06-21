const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
	mode: 'production',

	entry: {
		nav: './frontend/src/js/nav.js',
		findDistributors: './frontend/src/js/find-distributor.js',
		orderInit: './frontend/src/js/order-init.js',
		payment: './frontend/src/js/payment.js',
		prodDescModal: './frontend/src/js/prodDescModal.js',
		productApp: './frontend/src/js/product-app.js',
		renderProducts: './frontend/src/js/renderProduct.js',
	},

	output: {
		filename: '[name]bundle.js',
		path: path.resolve(__dirname, './frontend/dist/js'), // Update the path here
	},

	plugins: [new Dotenv()],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							// Add any other Babel plugins you're using
						],
					},
				},
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						// ... babel options
					},
				},
			},
		],
	},

	resolve: {
		fallback: {
			path: false,
			os: false,
			crypto: false,
		},
	},
};
