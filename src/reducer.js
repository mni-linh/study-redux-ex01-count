import { combineReducers } from "redux";
// reducer nhận 2 param là state init và action để cập nhật giá trị mới cho state ==> reducer để cập nhật state
const reusult = (state = 0, action) => {
  // console.log(state);
  // chia các trường hợp theo type của action để state được cập nhật theo action tương ứng
  // Trường hợp: Tăng
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    // Trường hợp: Giảm
    case "DECREMENT":
      return state - 1;
    // Trường hợp còn lại --> Giữ nguyên
    default:
      return state;
  }
};
//  Kết hợp tất cả các reducer con này thành một reducer duy nhất và trả về state toàn cục của app
const rootReducer = combineReducers({
  reusult,
});

export default rootReducer;
