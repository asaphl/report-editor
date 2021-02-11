import { REORDER_BLOCK, ADD_BLOCK, SELECT_BLOCK, UPDATE_BLOCK, REMOVE_BLOCK, UPDATE_SELECTED_BLOCK } from "../constants/actions"
import { v4 as uuid }  from 'uuid';

export const reorderBlock = (blockId, sourceIndex, destinationIndex) => {
    return {
        type: REORDER_BLOCK,
        source: sourceIndex,
        destination: destinationIndex,
        payload: {
            id: blockId
        }
    }
}

export const addBlock = (sourceIndex, destinationIndex) => {
    return {
        type: ADD_BLOCK,
        source: sourceIndex,
        destination: destinationIndex,
    }
}

export const updateBlock = (block) => {
    return {
        type: UPDATE_BLOCK,
        payload: block
    }
}

export const removeBlock = block => {
    return {
        type: REMOVE_BLOCK,
        payload: block
    }
}

export const selectBlock = (block) => {
    return {
        type: SELECT_BLOCK,
        payload: block
    }
}

export const updateSelectedBlock = block => {
    return {
        type: UPDATE_SELECTED_BLOCK,
        payload: block
    }
}