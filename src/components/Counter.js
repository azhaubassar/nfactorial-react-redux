import { connect } from "react-redux";
import { increment, decrement, random } from "../actions";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment)} className="btn btn-primary">
        Increment
      </button>
      <button onClick={() => dispatch(decrement)} className="btn btn-primary">
        Decrement
      </button>
      <button onClick={() => dispatch(random)} className="btn btn-primary">
        Random
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(actions, dispatch);
  return {
    increment: () => dispatch(actions.increment),
    decrement: () => dispatch(actions.decrement),
    random: () => dispatch(actions.random),
  };
};

// connect это HOC, который подгрузит нам нужные данные из стора и передаст их в Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter); //HOC
// export default Counter;
