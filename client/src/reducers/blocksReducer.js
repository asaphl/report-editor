import { DEFAULT_BLOCKS } from "../constants/blockTypes";
import { v4 as uuid } from "uuid";
import {
  ADD_BLOCK,
  NEW_REPORT,
  OPEN_REPORT,
  REMOVE_BLOCK,
  REORDER_BLOCK,
  UPDATE_BLOCK,
} from "../constants/actions";

const initState = [
  {
    id: "82d6ad42-0701-48de-a4de-da4e0d4b19ea",
    type: "HEADLINE",
    data: { type: "DATASOURCE_STATIC", content: "Welcome!" },
    index: 0,
  },
  {
    id: "1c137669-eeb6-4bc4-87cb-95c016bb249d",
    type: "TEXT",
    data: {
      type: "DATASOURCE_STATIC",
      content:
        "To start editing, simply open an existing report, or start dragging blocks.",
    },
    index: 1,
  },
];

export default function blocksReducer(state = initState, action) {
  let newState = Array.from(state);
  switch (action.type) {
    case NEW_REPORT:
      return [];
    case OPEN_REPORT:
      newState = JSON.parse(action.payload.data);
      return newState;
    case REORDER_BLOCK:
      const block = state[action.source];
      newState.splice(action.source, 1);
      newState.splice(action.destination, 0, block);
      return newState;
    case ADD_BLOCK:
      const defaulBlocksArray = Array.from(DEFAULT_BLOCKS);
      const newBlock = {
        id: uuid(),
        ...defaulBlocksArray[action.source],
      };
      newState.splice(action.destination, 0, newBlock);
      return newState;
    case UPDATE_BLOCK:
      return state.map((block) => {
        if (block.id === action.payload.id) return action.payload;
        return block;
      });
    case REMOVE_BLOCK:
      return state.filter((block) => block.id !== action.payload.id);
    default:
      return state;
  }
}
