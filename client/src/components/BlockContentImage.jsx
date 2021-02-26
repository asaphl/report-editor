import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function BlockContentImage(props) {
    if (!props.data.type) return <FontAwesomeIcon icon={faImage} />;

    return (
        <React.Fragment>
            <img src={ props.data.path } alt={ props.data.caption } width='100%' />
                <sub>{ props.data.caption }</sub><sub dangerouslySetInnerHTML={ {__html: `. ${props.data.credit}`} } />
        </React.Fragment>
    );
}

export default BlockContentImage;