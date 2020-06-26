const Shuffle = require( 'shufflejs/dist/shuffle' );

const portfolio = ( function() {
	const element = document.querySelector( '.feature-works' );
	const sizer = ( element !== null ) ? element.querySelector( '.sizer' ) : null;
	const items = '.work';
	const options = document.querySelector( '.filter-options' );
	const children = ( options !== null ) ? options.querySelectorAll( 'a' ) : null;

	const run = function() {
		if ( element === null ) {
			return;
		}
		this.shuffle = new Shuffle( element, {
			itemSelector: items,
			sizer,
			isCentered: true,
		} );
		this._activeFilters = [];
		this.addFilterButtons();
	};

	run.prototype.addFilterButtons = function() {
		if ( ! options ) {
			return;
		}
		const filterButtons = Array.from( children );

		filterButtons.forEach( function( button ) {
			button.addEventListener( 'click', this._handleFilterClick.bind( this ), false );
		}, this );
	};

	run.prototype._handleFilterClick = function( evt ) {
		const btn = evt.currentTarget;
		const btnGroup = btn.getAttribute( 'data-group' );

		this._removeActiveClassFromChildren();

		let filterGroup;
		if ( btnGroup === 'All' ) {
			filterGroup = Shuffle.ALL_ITEMS;
		} else {
			filterGroup = btnGroup;
		}
		btn.classList.add( 'active' );
		this.shuffle.filter( filterGroup );
	};

	run.prototype._removeActiveClassFromChildren = function() {
		for ( let i = children.length - 1; i >= 0; i-- ) {
			children[ i ].classList.remove( 'active' );
		}
	};

	return {
		init: run,
	};
} )();

module.exports = portfolio;
