import { DEFAULT_BLOCKS } from '../constants/blockTypes';
import { v4 as uuid } from 'uuid';
import { ADD_BLOCK, REMOVE_BLOCK, REORDER_BLOCK, UPDATE_BLOCK } from '../constants/actions';


const initState = (
[
    {
      "id": "ae4847b9-871c-46d8-b29d-1b31830505cf",
      "type": "HEADLINE",
      "data": {
        "type": "DATASOURCE_STATIC",
        "country": "DEU",
        "content": "GERMANY"
      },
      "index": 0
    },
    {
      "id": "00c76197-3599-4176-8692-f0420b8879ec",
      "type": "IMAGE",
      "data": {
        "type": "DATASOURCE_DYNAMIC",
        "country": "DEU",
        "sourceId": 4,
        "path": "http://localhost:5000/images/roman-kraft-g_gwdpsCVAY-unsplash.jpg",
        "caption": "Rothenburg ob der Tauber, Germany",
        "credit": "<span>Photo by <a href=\"https://unsplash.com/@romankraft?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\">Roman Kraft</a> on <a href=\"https://unsplash.com/s/photos/germany?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\">Unsplash</a></span>"
      },
      "index": 1
    },
    {
      "id": "b6785a1f-d517-494b-9c67-9f0f255a9356",
      "type": "HEADLINE",
      "data": {
        "type": "DATASOURCE_DYNAMIC",
        "country": "DEU",
        "sourceId": 2,
        "content": "Geography"
      },
      "index": 2
    },
    {
      "id": "7de6f647-e8c8-4db9-95fc-a5d02dc8d9b4",
      "type": "TEXT",
      "data": {
        "type": "DATASOURCE_DYNAMIC",
        "country": "DEU",
        "sourceId": 2,
        "content": "Germany is in Western and Central Europe, bordering Denmark to the north, Poland and the Czech Republic to the east, Austria to the southeast, and Switzerland to the south-southwest. France, Luxembourg and Belgium are situated to the west, with the Netherlands to the northwest. Germany is also bordered by the North Sea and, at the north-northeast, by the Baltic Sea. German territory covers 357,022 km2 (137,847 sq mi), consisting of 348,672 km2 (134,623 sq mi) of land and 8,350 km2 (3,224 sq mi) of water. It is the seventh largest country by area in Europe and the 62nd largest in the world.[4]"
      },
      "index": 2
    }
  ]
  
);

export default function reportReducer(state = initState, action) {
    let newState = Array.from(state);
    switch(action.type){
        case REORDER_BLOCK:
            const block = state[action.source];
            newState.splice(action.source, 1);
            newState.splice(action.destination, 0, block);
            return newState;
        case ADD_BLOCK:
            const defaulBlocksArray = Array.from(DEFAULT_BLOCKS);
            const newBlock = { 
                id: uuid(), 
                ...defaulBlocksArray[action.source]
            };
            newState.splice(action.destination, 0, newBlock);
            return newState;
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