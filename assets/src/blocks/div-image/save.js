/**
 * Internal dependencies
 */
import {
	IMAGE_BACKGROUND_TYPE,
	backgroundImageStyles,
} from './shared';

const save = ( { attributes, className } ) => {
	const {
		url,
		backgroundType,
	} = attributes;

	const style = backgroundType === IMAGE_BACKGROUND_TYPE ? backgroundImageStyles( url ) : {};

	return (
		<div className={ className } style={ style }></div>
	);
};

export default save;
