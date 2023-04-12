import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger" onClick={()=>dispatch(decNumber())}>
          -
        </button>
        <input name='="quantity' type="text" class="quantity_input" value={myState}  style={{backgroundColor:"white"}} />
        <button type="button" className="btn btn-success" onClick={()=>dispatch(incNumber())}>
          +
        </button>
      </div>
    </>
  );
};

<input name='="quantity' type="text" class="quantity_input" value="0" />;
export default App;
