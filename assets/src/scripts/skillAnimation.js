const jQuery = require( 'jquery' );

const skillAnimation = ( function( $ ) {
	const process = {
		start: false,
		finished: false,
	};

	const processing = function( $target ) {
		if ( process.finished ) {
			return;
		}
		if ( process.start ) {
			return;
		}
		run( $target );
	};

	const run = function( $target ) {
		process.start = true;
		$target.each( function() {
			const progressWidth = $( this ).data( 'progress-value' ) + '%';
			$( this ).css( {
				width: progressWidth,
			} );
			$( this ).find( '.progress-value' ).animate( {
				countNum: parseInt( progressWidth, 10 ),
			}, {
				duration: 2000,
				easing: 'swing',
				step() {
					$( this ).text( Math.floor( this.countNum ) + '%' );
				},
				complete() {
					$( this ).text( this.countNum + '%' );
				},
			} );
		} );
		process.finished = true;
	};

	return {
		run: processing,
	};
} )( jQuery );

module.exports = skillAnimation;
