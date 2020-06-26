/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import icon from './icon';
import metadata from './block.json';
import save from './save';

const { name, category, attributes } = metadata;

export { name };

export const settings = {
	title: __( 'DIV Background Image', 'skedtech' ),
	description: __( 'Insert an image to background-image of div style attribute.', 'skedtech' ),
	icon,
	category,
	attributes,
	keywords: [
		'img', // "img" is not translated as it is intended to reflect the HTML <img> tag.
		__( 'photo', 'skedtech' ),
	],
	example: {
		attributes: {
			url: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
		},
	},
	edit,
	save,
};
