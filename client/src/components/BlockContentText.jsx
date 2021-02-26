import { faParagraph } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function BlockContentText(props) {
    
    if (!props.data.type) return <FontAwesomeIcon icon={faParagraph} />;

    return (
        <p>
            { props.data?.content }
        </p>
    );
}

export default BlockContentText;