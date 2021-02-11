import Axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DATASOURCE_REMOTE, DATASOURCE_STATIC, DATASOURCE_LOCAL } from '../../constants/datasourceTypes';
import BlockContent from '../BlockContent';
import DatasourceRemote from './DatasourceRemote';
import DatasourceStatic from './DatasourceStatic';
import DatasourceLocal from './DatasourceLocal';


function Datasource(props) {
    const selectedBlock = useSelector(state => state.selected);

    if (!selectedBlock) return null;

    const renderDatasourcePanel = (type) => {
        if (type === DATASOURCE_STATIC) return <DatasourceStatic />;
        if (type === DATASOURCE_REMOTE) return <DatasourceRemote />;
        if (type === DATASOURCE_LOCAL) return <DatasourceLocal />;
    }

    return (
        <div>
            { renderDatasourcePanel(selectedBlock.data.type) }
            <div>Preview:</div>
            <BlockContent {...selectedBlock} />
        </div>
    );
}

export default Datasource;