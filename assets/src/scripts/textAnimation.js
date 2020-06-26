const textAnimation = ( function() {
	const duration = {
		animationDelay: 2500,
		reveal: 600,
		revealAnimationDelay: 1500,
	};

	const animateHeadline = function( $headline ) {
		const spanWrapper = $headline.find( '.words-wrapper' ),
			newWidth = spanWrapper.width() + 10;
		spanWrapper.css( 'width', newWidth );
		setTimeout( function() {
			hideWord( $headline.find( '.is-visible' ).eq( 0 ) );
		}, duration.animationDelay );
	};

	const hideWord = function( $word ) {
		const nextWord = takeNext( $word );
		$word.parents( '.words-wrapper' ).animate( { width: '2px' }, duration.reveal, function() {
			switchWord( $word, nextWord );
			showWord( nextWord );
		} );
	};

	const showWord = function( $word ) {
		$word.parents( '.words-wrapper' ).animate( { width: $word.width() + 10 }, duration.reveal, function() {
			setTimeout( function() {
				hideWord( $word );
			}, duration.revealAnimationDelay );
		} );
	};

	const takeNext = function( $word ) {
		return ( ! $word.is( ':last-child' ) ) ? $word.next() : $word.parent().children().eq( 0 );
	};

	const switchWord = function( $oldWord, $newWord ) {
		$oldWord.removeClass( 'is-visible' ).addClass( 'is-hidden' );
		$newWord.removeClass( 'is-hidden' ).addClass( 'is-visible' );
	};

	return {
		init: animateHeadline,
	};
} )();

module.exports = textAnimation;
