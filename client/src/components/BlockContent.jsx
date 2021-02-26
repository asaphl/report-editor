import React from 'react';
import { BLOCK_TYPES } from '../constants/blockTypes';
import BlockContentHeadline from './BlockContentHeadline';
import BlockContentImage from './BlockContentImage';
import BlockContentText from './BlockContentText';

function BlockContent(props) {
    const { type } = props;
    let renderedBlock;
    switch (type) {
        case BLOCK_TYPES.HEADLINE:
            renderedBlock = <BlockContentHeadline {...props} />;
            break;
        case BLOCK_TYPES.TEXT:
            renderedBlock = <BlockContentText {...props} />;
            break;
        case BLOCK_TYPES.IMAGE:
            renderedBlock = <BlockContentImage {...props} />;
            break;
        default:
            renderedBlock = null;
    }
    return (
        <div>
            { renderedBlock }
        </div>
    );
}

export default BlockContent;