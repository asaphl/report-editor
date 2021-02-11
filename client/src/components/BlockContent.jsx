import { faAlignLeft, faHeading, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from '@testing-library/react';
import React from 'react';
import { BLOCK_TYPES } from '../constants/blockTypes';

function BlockContent(props) {
    const { type, content } = props;
    let renderedBlock;
    switch (type) {
        case BLOCK_TYPES.HEADLINE:
            if (content) {
                renderedBlock = <h3>{content}</h3>;
            } else {
                renderedBlock =  <FontAwesomeIcon icon={faHeading} />
            }
            
            break;
        case BLOCK_TYPES.PARAGRAPH:
            if (content) {
                renderedBlock = <p>{content}</p>;
            } else {
                renderedBlock = <FontAwesomeIcon icon={faAlignLeft} />
            }
            break;
        case BLOCK_TYPES.IMAGE:
            if (content) {
                renderedBlock = <img src={content} />;
            } else {
                renderedBlock = <FontAwesomeIcon icon={faImage} />
            }
            
            break;
    }
    return (
        <div>
            { renderedBlock }
        </div>
    );
}

export default BlockContent;