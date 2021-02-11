import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DEFAULT_BLOCKS } from '../constants/blockTypes';
import ToolbarBlock from './ToolbarBlock';

function Toolbar(props) {
    return (
        <Droppable droppableId='toolbar'>
        { provided => (
            <div ref={provided.innerRef}
                {...provided.droppableProps}>
            
                { DEFAULT_BLOCKS.map((defaultBlock, index) => <ToolbarBlock {...defaultBlock} key={props.type} index={index} />)}
            
            </div>)
        }
            
        </Droppable>
    );
}

export default Toolbar;