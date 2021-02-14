import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBlock, removeBlock } from '../../actions';


function Actions(selectedBlock) {
    const dispatch = useDispatch();

    return (
        <div>
        <button onClick={() => dispatch(updateBlock({ ...selectedBlock }))}>Update</button>
        <button onClick={() => dispatch(removeBlock(selectedBlock))}>Delete</button>
        </div>
    );
}

export default Actions;