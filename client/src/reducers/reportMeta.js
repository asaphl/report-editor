import { OPEN_REPORT } from "../constants/actions";

const initState ={
    id: '1',
    name: 'germany'
}

export default function reportMeta(state = initState, action) {
    switch (action.type) {
        case OPEN_REPORT:
            return {
                id: action.payload.id,
                name: action.payload.name
            }
        default:
            return state;

    }
}