import Axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DATASOURCE_STATIC, DATASOURCE_DYNAMIC } from '../../constants/datasourceTypes';
import DatasourceStatic from './DatasourceStatic';
import DatasourceDynamic from './DatasourceDynamic';
import DatasourceType from './DatasourceType';
import Preview from './Preview';
import Actions from './Actions';


function Datasource(props) {
    const selectedBlock = useSelector(state => state.selected);

    if (!selectedBlock) return null;

    const renderDatasourcePanel = (type) => {
        if (type === DATASOURCE_STATIC) return <DatasourceStatic />;
        if (type === DATASOURCE_DYNAMIC) return <DatasourceDynamic />;
    }

    return (
        <div>
            <DatasourceType {...selectedBlock}></DatasourceType>
            { renderDatasourcePanel(selectedBlock.data.type) }
            <Preview {...selectedBlock} />
            <Actions {...selectedBlock} />
        </div>
    );
}

export default Datasource;