import { FORM_DATA } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case FORM_DATA:
      return action.payload;
    default:
      return state;
  }
}
