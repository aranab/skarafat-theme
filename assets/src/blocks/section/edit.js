/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

const edit = ( { className } ) => (
	<section className={ className }>
		<InnerBlocks />
	</section>
);

export default edit;
