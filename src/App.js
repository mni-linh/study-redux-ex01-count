import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./store/actions/counterAction";
import StyledButton from "./styles/StyledButton";

export default function App() {
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(decreaseCount());
  };
  const handleIncrease = () => {
    dispatch(increaseCount());
  };
  const { result } = useSelector((state) => state.counter);
  console.log(result);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledButton title="-" onClick={() => handleDecrease} />
      <p style={{ color: "red", fontSize: "50px", fontWeight: "bold" }}>
        {result}
      </p>
      <StyledButton title="+" onClick={() => handleIncrease} />
    </div>
  );
}
