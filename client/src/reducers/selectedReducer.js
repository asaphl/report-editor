import { ADD_BLOCK, SELECT_BLOCK, UPDATE_SELECTED_BLOCK } from "../constants/actions"

export default function selectedReducer(state = null, action) {
    switch (action.type) {
        case SELECT_BLOCK:
            return action.payload;
            break;
        case UPDATE_SELECTED_BLOCK:
            return action.payload;
            break;
        default:
            return state;
    }
}