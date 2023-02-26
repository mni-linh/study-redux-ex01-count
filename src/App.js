import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";
import StyledButton from "./styles/StyledButton";

const App = (props) => {
  // console.log(prop);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledButton title="-" onClick={props.decrement} />
      <p style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>
        {props.reusult}
      </p>
      <StyledButton title="+" onClick={props.increment} />
    </div>
  );
};
// Kết nối state được quản lý bởi Redux store vs các props của component React --> trả về một object props của React component để sử dụng
const mapStateToProps = (state) => {
  // console.log("state", state);
  return { reusult: state.reusult };
};
// Kết nối các actions của Redux đến các props của component React.
// Trả về một object chứa các function dispatch action, giúp component có thể gửi các action đến store của Redux.
const mapDispatchToProps = {
  increment,
  decrement,
};
// Kết nối một component của React với store của Redux, cho phép component truy cập vào state và dispatch các actions để thay đổi state
export default connect(mapStateToProps, mapDispatchToProps)(App);
