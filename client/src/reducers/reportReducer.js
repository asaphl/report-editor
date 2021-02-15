import {BLOCK_TYPES, DEFAULT_BLOCKS} from '../constants/blockTypes';
import { v4 as uuid} from 'uuid';
import { ADD_BLOCK, REMOVE_BLOCK, REORDER_BLOCK, UPDATE_BLOCK } from '../constants/actions';
import { DATASOURCE_STATIC, DATASOURCE_DYNAMIC } from '../constants/datasourceTypes';

const initState = [
    {
        id: '0',
        type: BLOCK_TYPES.HEADLINE,
        data: {
            type: DATASOURCE_STATIC,
            source: 'Headline 1'
        }
    },
    {
        id: '1',
        type: BLOCK_TYPES.TEXT,
        data: {
            type: DATASOURCE_STATIC,
            source: 'Some text'
        }
    }
]



export default function reportReducer(state = initState, action) {
    let newState = Array.from(state);
    switch(action.type){
        case REORDER_BLOCK:
            const block = state[action.source];
            newState.splice(action.source, 1);
            newState.splice(action.destination, 0, block);
            return newState;
            break;
        case ADD_BLOCK:
            const defaulBlocksArray = Array.from(DEFAULT_BLOCKS);
            const newBlock = { 
                id: uuid(), 
                ...defaulBlocksArray[action.source]
            };
            newState.splice(action.destination, 0, newBlock);
            return newState;
            break;
        case UPDATE_BLOCK:
            return state.map(block => {
                if (block.id === action.payload.id) return action.payload;
                return block;
            });
        case REMOVE_BLOCK:
            return state.filter(block => block.id !== action.payload.id);
        default:
            return state;
    }
}