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

const { name, category } = metadata;

export { name };

export const settings = {
	title: __( 'DIV Container', 'skedtech' ),
	icon,
	category,
	description: __(
		'Add a block that displays content inside div HTML tag, then add whatever content blocks you’d like.',
		'skedtech'
	),
	edit,
	save,
};
