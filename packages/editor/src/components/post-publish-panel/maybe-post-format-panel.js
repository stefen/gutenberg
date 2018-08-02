/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { Dashicon, PanelBody } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import PostFormat from '../post-format';

const MaybePostFormatPanel = ( { currentPostFormat, suggestedPostFormat } ) => suggestedPostFormat &&
	suggestedPostFormat !== currentPostFormat &&
	<PanelBody initialOpen={ false } title={ [
		<Dashicon
			key={ 'dashicon-lightbulb' }
			icon={ 'lightbulb' }
			className={ 'post-publish-panel__tip' }
			size={ 18 }
		/>,
		<span className="editor-post-publish-panel__link" key="label">{
			__( 'Add a post format' )
		}</span>,
	] } >
		<p>Post formats are used to display different types of content differently.</p>
		<PostFormat />
	</PanelBody>;

export default withSelect(
	( select ) => {
		const { getEditedPostAttribute, getSuggestedPostFormat } = select( 'core/editor' );
		return {
			suggestedPostFormat: getSuggestedPostFormat(),
			currentPostFormat: getEditedPostAttribute( 'format' ),
		};
	}
)( MaybePostFormatPanel );