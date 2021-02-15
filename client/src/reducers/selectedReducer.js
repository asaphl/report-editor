import { REMOVE_BLOCK, SELECT_BLOCK, UPDATE_SELECTED_BLOCK } from "../constants/actions"

export default function selectedReducer(state = null, action) {
    switch (action.type) {
        case SELECT_BLOCK:
            return (action.payload ? action.payload : null);
            break;
        case UPDATE_SELECTED_BLOCK:
            return action.payload;
            break;
        case REMOVE_BLOCK:
            if (state.id === action.payload.id) return null
            break;
        default:
            return state;
    }
}