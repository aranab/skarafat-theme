export const IMAGE_BACKGROUND_TYPE = 'image';
export const backgroundImageStyles = ( url ) => {
	return url ? { backgroundImage: `url(${ url })` } : {};
};
