import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {BLOCK_TYPES} from '../constants/blockTypes';
import BlockContent from './BlockContent';
import { useDispatch } from 'react-redux';
import { SELECT_BLOCK } from '../constants/actions';
import { selectBlock } from '../actions';

function Block(props) {
    const content = props.content;
    const dispatch = useDispatch();

    return (
        <Draggable draggableId={props.id} index={props.index}>
        {(provided) => (
            <div className='Block' ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={() => dispatch(selectBlock(props))}>
                <BlockContent {...props} />
            </div>
        )}
        </Draggable>
    );
}

export default Block;