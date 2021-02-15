import React from 'react';
import { DATASOURCE_DYNAMIC, DATASOURCE_STATIC } from '../constants/datasourceTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading } from '@fortawesome/free-solid-svg-icons';


function BlockContentHeadline(props) {
    let renderedHeadline = null;
    if (!props.data.type) {
        renderedHeadline = <FontAwesomeIcon icon={faHeading} />
    } else if (props.data.type === DATASOURCE_STATIC) {
        renderedHeadline = (<h1>{props.data.source}</h1>);
    } else if (props.data.type === DATASOURCE_DYNAMIC) {
        if (props.data.source) renderedHeadline = <h1>{props.data.source.body}</h1>;
    }

    return (
        <React.Fragment>
            { renderedHeadline }
        </React.Fragment>
    );
}

export default BlockContentHeadline;