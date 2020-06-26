const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		blocks: path.resolve( __dirname, 'assets/src/blocks', 'index.js' ),
		bundle: path.resolve( __dirname, 'assets/src/scripts', 'index.js' ),
	},
	output: {
		path: path.resolve( __dirname, 'assets/js' ),
		filename: '[name].min.js',
	},
};
