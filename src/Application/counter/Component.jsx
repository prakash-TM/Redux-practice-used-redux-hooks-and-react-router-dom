import React from "react";
import { connect } from "react-redux";
import { useSelector,useDispatch } from "react-redux";
import { incrementation,decrementation } from "./action";
import {Link} from "react-router-dom"
const Counter=()=>{
    const dispatch=useDispatch()
   
    const {count}=useSelector((state)=>{
       
        const {CounterReducer}=state;
        
        return CounterReducer
    })

    
    return(
        <>
        <div><h3>Redux Counter App</h3></div>
        <div><h5>value is : {count}</h5></div>
        <div>
            <button onClick={()=>dispatch(incrementation())}>Increment</button>
            <button onClick={()=>dispatch(decrementation())}>Decrement</button>
        </div>
        <div>
            <Link to="/Multiplier">go to multiplier</Link>
        </div>
        </>
    )
}

export default Counter