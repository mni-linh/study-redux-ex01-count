// define các action theo type
// Tăng
const increment = () => {
  return { type: "INCREMENT" };
};
// Giảm
const decrement = () => {
  return { type: "DECREMENT" };
};
export { increment, decrement };
