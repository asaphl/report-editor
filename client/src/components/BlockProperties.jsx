import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Datasource from './datasource/Datasource';
import DatasourceType from './datasource/DatasourceType';

function BlockProperties(props) {
    const selected = useSelector(state => state.selected);
    const page = useSelector(state => state.page);
    const properties = page[selected];

    return (
        <div>
            
            <Datasource></Datasource>
            
        </div>
    );
}

export default BlockProperties;