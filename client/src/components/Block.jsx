import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import BlockContent from './BlockContent';
import { useDispatch } from 'react-redux';
import { selectBlock } from '../actions';

function Block(props) {
    const dispatch = useDispatch();

    return (
        <Draggable draggableId={props.id} index={props.index} key = {selectBlock.id}>
        {(provided) => (
            <div className='Block' ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                onClick={() => dispatch(selectBlock(props))}
            >
                <BlockContent {...props} />
            </div>
        )}
        </Draggable>
    );
}

export default Block;