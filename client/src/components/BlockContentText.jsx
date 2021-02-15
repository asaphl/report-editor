import { faParagraph } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {DATASOURCE_DYNAMIC, DATASOURCE_STATIC} from '../constants/datasourceTypes';

function BlockContentText(props) {
    let renderedText = null;
    if (!props.data.type) {
        renderedText = <FontAwesomeIcon icon={faParagraph} />
    } else if (props.data.type === DATASOURCE_STATIC) {
        renderedText = (<p>{props.data.source}</p>);
    } else if (props.data.type === DATASOURCE_DYNAMIC) {
        if (props.data.source) renderedText = <p>{props.data.source.body}</p>;
    }

    return (
        <React.Fragment>
            { renderedText }
        </React.Fragment>
    );
}

export default BlockContentText;