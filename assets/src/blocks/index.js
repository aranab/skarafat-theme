/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as div from './div-container';
import * as divImage from './div-image';
import * as section from './section';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const {
		settings,
		name,
	} = block;

	registerBlockType( name, settings );
};

/**
 * Function to select block and calling register function.
 *
 */
const registerSkedtechBlocks = () => {
	[
		div,
		divImage,
		section,
	].forEach( registerBlock );
};

/**
 * Call and run the function
 *
 */
registerSkedtechBlocks();
