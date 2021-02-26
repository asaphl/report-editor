import React from 'react';
import styled from 'styled-components';
import Actions from './datasource/Actions';
import Datasource from './datasource/Datasource';
import Preview from './datasource/Preview';

const StyledRightPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: rgb(245, 245, 245);
`;
//grid-template-rows: 250px auto 100px;
function BlockProperties(props) {
    return (
        <StyledRightPanel>
            <Datasource />
            <Preview />
            <Actions />
        </StyledRightPanel>
    );
}

export default BlockProperties;