import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import BlockContent from './BlockContent';

const DraggableToolbarBlock = styled.div`
    border: 2px solid indigo;
    margin: 5px;
    padding: 20px;
`;

function ToolbarBlock(props) {
    const { type, index } = props;
    return (
        <Draggable draggableId={type} index={index}>
        { provided => (
            <DraggableToolbarBlock ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
                <BlockContent {...props} />
            </DraggableToolbarBlock>
        )}
        
        </Draggable>
    );
}

export default ToolbarBlock;