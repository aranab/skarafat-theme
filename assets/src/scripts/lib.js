const lib = ( function() {
	const mobileNavClose = true;

	const HasClass = function( el, className ) {
		return new RegExp( ' ' + className + ' ' ).test( ' ' + el.className + ' ' );
	};

	const mobileNav = function( close ) {
		const dom = document.getElementById( 'mb-menu' );

		if ( close === true ) {
			this.mobileNavClose = true;
			dom.classList.remove( 'open' );
			return;
		}
		if ( HasClass( dom, 'open' ) ) {
			this.mobileNavClose = true;
			dom.classList.remove( 'open' );
		} else {
			this.mobileNavClose = false;
			dom.classList.add( 'open' );
		}
	};

	return {
		mobileMenu: mobileNav,
		mobileNavClose,
	};
} )();

module.exports = lib;
