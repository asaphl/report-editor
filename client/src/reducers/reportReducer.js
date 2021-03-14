import { NEW_REPORT, OPEN_REPORT, SAVE_REPORT } from "../constants/actions";

const initState = {
  id: "0",
  name: "",
};

export default function reportReducer(state = initState, action) {
  switch (action.type) {
    case NEW_REPORT:
      return {
        id: "",
        name: ""
      }
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
