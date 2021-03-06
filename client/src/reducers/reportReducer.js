import { OPEN_REPORT, SAVE_REPORT } from "../constants/actions";

const initState = {
  id: "0",
  name: "",
};

export default function reportReducer(state = initState, action) {
  switch (action.type) {
    case OPEN_REPORT:
      return {
        id: action.payload.id,
        name: action.payload.name,
      };
    case SAVE_REPORT:
      return {
        id: action.payload.id,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
