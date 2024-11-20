/* eslint-disable react/prop-types */
import { ACTIONS } from './App.jsx';

export default function OperationBtn({ dispatch, operation }) {
  return (
    <button 
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OP, payload: { operation } })}
    >
      {operation}
    </button>
  );
}
