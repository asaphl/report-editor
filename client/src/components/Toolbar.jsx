import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DEFAULT_BLOCKS } from '../constants/blockTypes';
import ToolbarBlock from './ToolbarBlock';

function Toolbar(props) {

    const c = {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
    }
    return (
        <Droppable droppableId='toolbar' isDropDisabled={true}>
        { (provided, snapshot) => (
            <div
                className={c}
                ref={provided.innerRef}
            >
                {
                    DEFAULT_BLOCKS.map((defaultBlock, index) => (
                        <ToolbarBlock {...defaultBlock} key={index} index={index} />
                    ))
                }

            </div>)
        }
            
        </Droppable>
    );
}

export default Toolbar;