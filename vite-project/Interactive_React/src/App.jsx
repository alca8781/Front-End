/* eslint-disable react/prop-types */
import { useReducer } from "react";
import DigitBtn from "./DigitButton";
import OperationBtn from "./OperationButton";
import "./calc.css";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OP: "choose_operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currOP: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currOP === "0") {
        return state;
      }
      if (payload.digit === "." && state.currOP.includes(".")) {
        return state;
      }
      return {
        ...state,
        currOP: `${state.currOP || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OP:
      if (state.currOP == null && state.prevOP == null) {
        return state;
      }

      if (state.currOP == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.prevOP == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOP: state.currOP,
          currOP: null,
        };
      }
      return {
        ...state,
        prevOP: evaluate(state),
        operation: payload.operation,
        currOP: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currOP: null,
        };
      }
      if (state.currOP == null) return state;
      if (state.currOP.length === 1) {
        return {
          ...state,
          currOP: null,
        };
      }
      return {
        ...state,
        currOP: state.currOP.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currOP == null || state.prevOP == null) {
        return state;
      }
      return {
        ...state,
        overwrite: true,
        prevOP: null,
        operation: null,
        currOP: evaluate(state),
      };

    default:
      return state;
  }
}

function evaluate({ currOP, prevOP, operation }) {
  const PREV = parseFloat(prevOP);
  const CURR = parseFloat(currOP);
  if (isNaN(PREV) || isNaN(CURR)) return "";
  let comp = "";
  switch (operation) {
    case "+":
      comp = PREV + CURR;
      break;

    case "-":
      comp = PREV - CURR;
      break;

    case "*":
      comp = PREV * CURR;
      break;

    case "÷":
      comp = PREV / CURR;
      break;

    default:
      return "";
  }
  return comp.toString();
}

function App() {
  const [{ currOP, prevOP, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div className="calc-grid">
      <div className="output">
        <div className="prev-OP">
          {prevOP} {operation}
        </div>
        <div className="curr-OP">{currOP}</div>
      </div>

      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
        AC
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
      <OperationBtn operation="÷" dispatch={dispatch} />
      <DigitBtn digit="1" dispatch={dispatch} />
      <DigitBtn digit="2" dispatch={dispatch} />
      <DigitBtn digit="3" dispatch={dispatch} />
      <OperationBtn operation="*" dispatch={dispatch} />
      <DigitBtn digit="4" dispatch={dispatch} />
      <DigitBtn digit="5" dispatch={dispatch} />
      <DigitBtn digit="6" dispatch={dispatch} />
      <OperationBtn operation="-" dispatch={dispatch} />
      <DigitBtn digit="7" dispatch={dispatch} />
      <DigitBtn digit="8" dispatch={dispatch} />
      <DigitBtn digit="9" dispatch={dispatch} />
      <OperationBtn operation="+" dispatch={dispatch} />
      <DigitBtn digit="." dispatch={dispatch} />
      <DigitBtn digit="0" dispatch={dispatch} />
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
        =
      </button>
    </div>
  );
}

export default App;
