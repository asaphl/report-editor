import { faAlignLeft, faHeading, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { render } from '@testing-library/react';
import React from 'react';
import { BLOCK_TYPES } from '../constants/blockTypes';
import BlockContentHeadline from './BlockContentHeadline';
import BlockContentImage from './BlockContentImage';
import BlockContentText from './BlockContentText';

function BlockContent(props) {
    const { type, content } = props;
    let renderedBlock;
    switch (type) {
        case BLOCK_TYPES.HEADLINE:
            renderedBlock = <BlockContentHeadline {...props} />;
            break;
        case BLOCK_TYPES.PARAGRAPH:
            renderedBlock = <BlockContentText {...props} />;
            break;
        case BLOCK_TYPES.IMAGE:
            renderedBlock = <BlockContentImage {...props} />;
            break;
    }
    return (
        <div>
            { renderedBlock }
        </div>
    );
}

export default BlockContent;