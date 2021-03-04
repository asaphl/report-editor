import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DEFAULT_BLOCKS } from '../constants/blockTypes';
import ToolbarBlock from './ToolbarBlock';

const Clone = styled.div`
    + div {
        display: none !important
    }
`;
function Toolbar(props) {

    const c = {
        display: 'flex',
        flexDirection: 'column',
        position: 'static',
        minHeight: '500px'
    }
    return (
        <Droppable droppableId='toolbar' isDropDisabled={true}>
        { (provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
                { DEFAULT_BLOCKS.map((defaultBlock, index) => <ToolbarBlock {...defaultBlock} key={defaultBlock.type} index={index} /> ) }
                { provided.placeholder }
            </div>
        )}  
        </Droppable>
    );
}

export default Toolbar;