const initialState = { counter: 0, name: "Aruzhan", class: "Batch 27" };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECR":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "RND":
      return {
        ...state,
        counter: state.counter * action.payload,
      };
    default:
      return state;
  }
};
