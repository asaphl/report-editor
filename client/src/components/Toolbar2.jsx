import styled from 'styled-components';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Clone = styled.div`
    & > div {
        display: static !important;
    }
`;

function Toolbar2(props) {
    return (
        <Droppable droppableId='toolbar-demo' isDropDisabled={true} >
        { (provided) => {
            return (
                <div
                    ref = { provided.innerRef }>
                        {['a', 'b', 'c'].map((item, i) => (
                            <Draggable
                                draggableId = { item }
                                key = { item }
                                index = { i } >
                                { (provided, snapshot) => (
                                    <React.Fragment>
                                    <div
                                        ref = { provided.innerRef }
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        isDragging = { snapshot.isDragging }>
                                        { item }
                                    </div>
                                    {snapshot.isDragging && (
                                        <Clone>{item.content}</Clone>
                                    )}
                                    </React.Fragment>
                                )}
                                
                            </Draggable>
                            )
                        )}
                
                </div>
            )
        }}
            
        </Droppable>
    );
}

export default Toolbar2;