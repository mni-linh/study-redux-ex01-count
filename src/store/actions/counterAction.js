import { INCREASE_COUNT, DECREASE_COUNT } from "../constants/actionTypes";

const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  };
};

const decreaseCount = () => {
  return {
    type: DECREASE_COUNT,
  };
};

export { increaseCount, decreaseCount };
