import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      //payload is the user model, use false so we dont return an empty string
      return action.payload || false;
    default:
      return state;
  }
}