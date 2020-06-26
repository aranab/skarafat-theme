/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import { compose } from '@wordpress/compose';
import { Component } from '@wordpress/element';
import {
	IconButton,
	Toolbar,
	withNotices,
	Spinner,
} from '@wordpress/components';
import {
	BlockControls,
	BlockIcon,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import icon from './icon';
import { IMAGE_BACKGROUND_TYPE } from './shared';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];

class DivBackGroundImageEdit extends Component {
	constructor() {
		super( ...arguments );
		this.onUploadError = this.onUploadError.bind( this );
	}

	onUploadError( message ) {
		const { noticeOperations } = this.props;
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	render() {
		const {
			attributes,
			setAttributes,
			className,
			noticeUI,
		} = this.props;

		const {
			id,
			url,
		} = attributes;

		const onSelectMedia = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { url: undefined, id: undefined } );
				return;
			}

			let mediaType;

			if ( media.media_type ) {
				if ( media.media_type !== IMAGE_BACKGROUND_TYPE ) {
					return;
				}
				mediaType = IMAGE_BACKGROUND_TYPE;
			} else {
				if ( media.type !== IMAGE_BACKGROUND_TYPE ) {
					return;
				}
				mediaType = IMAGE_BACKGROUND_TYPE;
			}

			setAttributes( {
				url: media.url,
				id: media.id,
				backgroundType: mediaType,
			} );
		};

		const hasURL = !! ( url );

		const controls = (
			<>
				<BlockControls>
					{ hasURL && (
						<>
							<MediaUploadCheck>
								<Toolbar>
									<MediaUpload
										onSelect={ onSelectMedia }
										allowedTypes={ ALLOWED_MEDIA_TYPES }
										value={ id }
										render={ ( { open } ) => (
											<IconButton
												className="components-toolbar__control"
												label={ __( 'Edit image', 'skedtech' ) }
												icon="edit"
												onClick={ open }
											/>
										) }
									/>
								</Toolbar>
							</MediaUploadCheck>
						</>
					) }
				</BlockControls>
			</>
		);

		if ( ! hasURL ) {
			const placeholderIcon = <BlockIcon icon={ icon } />;
			const label = __( 'Div Background Image', 'skedtech' );

			return (
				<>
					{ controls }
					<MediaPlaceholder
						icon={ placeholderIcon }
						className={ className }
						labels={ {
							title: label,
							instructions: __( 'Upload an image file, or pick one from your media library.', 'skedtech' ),
						} }
						onSelect={ onSelectMedia }
						accept="image/*"
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						notices={ noticeUI }
						onError={ this.onUploadError }
					>
						<div className="wp-block-cover__placeholder-background-options"></div>
					</MediaPlaceholder>
				</>
			);
		}

		return (
			<>
				{ controls }
				<div data-url={ url } className={ className }>
					<img src={ url } alt="Alt attribute is Empty." />
					{ isBlobURL( url ) && <Spinner /> }
				</div>
			</>
		);
	}
}

export default compose( [
	withNotices,
] )( DivBackGroundImageEdit );
