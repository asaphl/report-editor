import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import BlockContent from './BlockContent';

const DraggableToolbarBlock = styled.div`
    border: 2px solid indigo;
    margin: 5px;
    padding: 20px;
`;

const Clone = styled(DraggableToolbarBlock)`
    & > div {
        display: inherit !important;
    }
`;

function ToolbarBlock(props) {
    const { type, index } = props;
    return (
        <Draggable draggableId={type} index={index}>
        { (provided, snapshot) => (
            <React.Fragment>
            <DraggableToolbarBlock ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}>
                <BlockContent {...props} />
            </DraggableToolbarBlock>
            {
                snapshot.isDragging && (
                    <Clone>
                        <BlockContent {...props} />
                    </Clone>
                )
            }
            </React.Fragment>
            
        )}
        
        </Draggable>
    );
}

export default ToolbarBlock;