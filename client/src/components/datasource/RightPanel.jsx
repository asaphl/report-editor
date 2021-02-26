import React from 'react';
import styled from 'styled-components';
import Actions from './Actions';
import Datasource from './Datasource';
import Preview from './Preview';

const StyledRightPanel = styled.div`
    display: grid;
    grid-template-columns: 300px 300px auto 50px;
    background-color: rgb(245, 245, 245);
`;

function RightPanel(props) {
    return (
        <StyledRightPanel>
            <Datasource />
            <Preview />
            <div></div>
            <Actions />
        </StyledRightPanel>
    );
}

export default RightPanel;