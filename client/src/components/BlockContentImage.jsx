import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { DATASOURCE_STATIC, DATASOURCE_DYNAMIC } from '../constants/datasourceTypes';

function BlockContentImage(props) {
    let renderedImage = null;
    if (!props.data.type) {
        renderedImage = <FontAwesomeIcon icon={faImage} />
    } else if (props.data.type === DATASOURCE_STATIC) {
        renderedImage = (<img src={props.data.source} width='500' />);
    } else if (props.data.type === DATASOURCE_DYNAMIC) {
        if (props.data.source) renderedImage = <img src={props.data.source.path} width='500' />;
    }

    return (
        <React.Fragment>
            { renderedImage }
        </React.Fragment>
    );
}

export default BlockContentImage;