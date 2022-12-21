export const increment = { type: "INC" };
export const decrement = { type: "DECR" };
export const random = {
  type: "RND",
  payload: Math.floor(Math.random() * 10),
};
