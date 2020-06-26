const jQuery = require( 'jquery' );
const lib = require( './lib' );
const textAnimation = require( './textAnimation' );
const skillAnimation = require( './skillAnimation' );
const owlCarousel = require( 'owl.carousel' );
const particlesJs = require( 'exports-loader?window.particlesJS!particles.js' );
const particlesJson = require( './particles.json' );
const portfolio = require( './portfolio' );
require( 'lity' );

( function( $ ) {
	'use strict';

	$( document ).ready( function() {
		textAnimation.init( $( '.intro .headline' ) );

		$( this ).on( 'scroll', function() {
			if ( lib.mobileNavClose === false ) {
				lib.mobileMenu( true );
			}
			if ( $( '.skill' ).length > 0 ) {
				if ( $( this ).scrollTop() >= ( $( '#skills' ).position().top - 500 ) ) {
					skillAnimation.run( $( '.progress .progress-bar' ) );
				}
			}
		} );

		$( '.btn-mobile' ).click( function() {
			lib.mobileMenu();
		} );

		$( '.btn-close' ).click( function() {
			lib.mobileMenu( true );
		} );

		$( 'a[href^="#"]' ).on( 'click', function( e ) {
			if ( this.hash !== '' ) {
				e.preventDefault();
				if ( lib.mobileNavClose === false ) {
					lib.mobileMenu( true );
				}
				const target = $( this.hash );
				$( 'html, body' ).stop().animate( {
					scrollTop: ( target.offset().top - 80 ),
				}, 1000 );
			}
		} );

		$( '.owl-carousel' ).owlCarousel( {
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: true,
			smartSpeed: 500,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1040: {
					items: 3,
				},
			},
		} );

		particlesJs( 'particles', particlesJson );

		window.portfolio = new portfolio.init();
	} );
} )(
	jQuery,
	particlesJson,
	owlCarousel
);
