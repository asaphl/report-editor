import React from 'react';
import BlockContent from '../BlockContent';

function Preview(props) {
    return (
        <div>
            <div>Preview:</div>
            <BlockContent {...props} />
        </div>
    );
}

export default Preview;