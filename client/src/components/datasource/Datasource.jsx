import React from 'react';
import { useSelector } from 'react-redux';
import { DATASOURCE_STATIC, DATASOURCE_DYNAMIC } from '../../constants/datasourceTypes';
import DatasourceStatic from './DatasourceStatic';
import DatasourceDynamic from './DatasourceDynamic';
import DatasourceType from './DatasourceType';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

const StyledDatasource = styled.div`
    display: flex;
    flex-direction: column;
    maxHeight: 100%;

`;


function Datasource(props) {
    const selectedBlock = useSelector(state => state.selected);

    // if (!selectedBlock) return null;

    const renderDatasourcePanel = (type) => {
        if (type === DATASOURCE_STATIC) return <DatasourceStatic {...selectedBlock} />;
        if (type === DATASOURCE_DYNAMIC) return <DatasourceDynamic {...selectedBlock} />;
    }

    const renderPanel = (<React.Fragment>
            <DatasourceType {...selectedBlock}></DatasourceType>
            { renderDatasourcePanel(selectedBlock?.data?.type) }
        </React.Fragment>);

    return (
        <StyledDatasource>
            <Box color="rgb(100, 100, 100)" bgcolor="rgb(245, 245, 245)" borderBottom="1px solid grey" fontWeight="400"  paddingTop="5px" paddingBottom="5px">
                Data Source
            </Box>
            { selectedBlock ? renderPanel : null }
        </StyledDatasource>
    );
}

export default Datasource;