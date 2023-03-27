import { DECREASE_COUNT, INCREASE_COUNT } from "../constants/actionTypes";

const initialState = {
  counter: 0,
};
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
export default counterReducer;
