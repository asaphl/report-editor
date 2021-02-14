import {BLOCK_TYPES, DEFAULT_BLOCKS} from '../constants/blockTypes';
import { v4 as uuid} from 'uuid';
import { ADD_BLOCK, REMOVE_BLOCK, REORDER_BLOCK, UPDATE_BLOCK } from '../constants/actions';
import { DATASOURCE_STATIC, DATASOURCE_DYNAMIC } from '../constants/datasourceTypes';

const initState = [
    {
        id: '0',
        type: BLOCK_TYPES.HEADLINE,
        content: 'Headline 1',
        data: {
            type: DATASOURCE_STATIC,
            content: 'Headline 1'
        }
    },
    {
        id: '1',
        type: BLOCK_TYPES.PARAGRAPH,
        content: 'lorLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nisi at risus tempus porta at ac nibh. Duis molestie orci in odio commodo elementum. Ut pharetra finibus libero, non feugiat lacus viverra non. Duis ac metus in lorem rutrum consectetur. Phasellus lacinia fermentum massa. Etiam tincidunt aliquam orci, eu condimentum felis ultricies vel. Proin fermentum turpis ac ex ornare, id auctor est ullamcorper.em100',
        data: {
            type: DATASOURCE_DYNAMIC,
            src: 'Wikipedia',
            url: 'https://en.wikipedia.org/w/api.php',
            params: {
                action: 'query',
                format: 'json',
                origin: '*',
                prop: 'extracts',
                explaintext: 1,
                titles: 'Spain',
            },
            config: {
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            }
        }
    },
    {
        id: '2',
        type: BLOCK_TYPES.PARAGRAPH,
        content: 'lorLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nisi at risus tempus porta at ac nibh. Duis molestie orci in odio commodo elementum. Ut pharetra finibus libero, non feugiat lacus viverra non. Duis ac metus in lorem rutrum consectetur. Phasellus lacinia fermentum massa. Etiam tincidunt aliquam orci, eu condimentum felis ultricies vel. Proin fermentum turpis ac ex ornare, id auctor est ullamcorper.em100',
        data: {
            type: DATASOURCE_DYNAMIC,
            table: 'Countries',
            column: 'History',
            where: {
                CountryName: 'Spain' 
            }
        }
    },
    {
        id: '3',
        type: BLOCK_TYPES.HEADLINE,
        content: 'Headline 2',
        data: {
            type: DATASOURCE_STATIC,
            content: 'Headline 1'
        }
    },
    {
        id: '4',
        type: BLOCK_TYPES.PARAGRAPH,
        content: 'lorLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut nisi at risus tempus porta at ac nibh. Duis molestie orci in odio commodo elementum. Ut pharetra finibus libero, non feugiat lacus viverra non. Duis ac metus in lorem rutrum consectetur. Phasellus lacinia fermentum massa. Etiam tincidunt aliquam orci, eu condimentum felis ultricies vel. Proin fermentum turpis ac ex ornare, id auctor est ullamcorper.em100',
        data: {
            type: DATASOURCE_STATIC,
            content: 'Headline 1'
        }
    },
    {
        id: '5',
        type: BLOCK_TYPES.IMAGE,
        content: 'http://via.placeholder.com/150',
        data: {
            type: DATASOURCE_STATIC,
            content: 'Headline 1'
        }
    },

]



export default function pageReducer(state = initState, action) {
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